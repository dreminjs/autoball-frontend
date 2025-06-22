import {
  UseMutateFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { ApiOperationState } from '../../../shared/interfaces/api-operation-state.interface';
import { ICarSeries } from '@autoball-frontend/shared-types';
import { SERVICE_URLS } from '../../../shared/constants';
import { createOne, deleteOne, editOne, findManyByBrandId } from './service';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/interfaces/server-error';
import {
  IPostCarSeriesDto,
  IPostCarSeriesForm,
  IUpdateCarSeriesDto,
} from '../model/types/carseries.interface';
import { useNotificationActions } from '../../notifications';
import { useCarSeriesModal } from '../model/hooks/use-car-series-modal';
import { IMutateArgsDto } from '../../../shared';

export const useGetCarSeriesByBrandId = (
  brandId: string | null
): {
  data?: ICarSeries[];
} & ApiOperationState => {
  const { data, isSuccess, isPending, isError, error } = useQuery<
    ICarSeries[],
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carseries, brandId],
    queryFn: () => findManyByBrandId(brandId || ''),
    enabled: brandId !== null,
    refetchOnWindowFocus: false,
  });

  return { data, isSuccess, isPending, isError, error };
};

export const usePostCarSeries = (brandId: string) => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { closeModal } = useCarSeriesModal();

  const { mutate, ...props } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    IPostCarSeriesForm
  >({
    mutationFn: (data: IPostCarSeriesForm) => createOne({
      ...data, year: `${data.from} - ${data.to}`,
      car_brand_id: brandId
    }),
    mutationKey: [SERVICE_URLS.carseries],
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries, brandId || ''],
      });
      addSuccess();
    },
    onError: (data) => {
      remove('info');
      addError();
    },
  });

  const handleMutate = (args: IMutateArgsDto<IPostCarSeriesForm>) => {

    addInfo();
    mutate(args.data, {
      onSuccess: closeModal,
      onError: closeModal,
    });
  };

  return {mutate: handleMutate, ...props}
};

export const useDeleteCarSeries = (
  brandId?: string
): {
  mutate: UseMutateFunction<ICarSeries, AxiosError<IServerError>, string>;
} & ApiOperationState => {
  const queryClient = useQueryClient();

  return useMutation<ICarSeries, AxiosError<IServerError>, string>({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: (id: string) => deleteOne(id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries, brandId],
      });
      // addNotification({
      //   message: 'Успех!',
      //   type: 'success',
      //   duration: 3000,
      // });
    },
    onError: (data) => {
      // addNotification({
      //   message: data.response?.data.detail || 'Error!',
      //   type: 'success',
      //   duration: 3000,
      // });
    },
  });
};

export const useEditCarSeries = (): {
  mutate: UseMutateFunction<
    ICarSeries,
    AxiosError<IServerError>,
    { id: string; data: IUpdateCarSeriesDto }
  >;
} & ApiOperationState => {
  const queryClient = useQueryClient();

  return useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    { id: string; data: IUpdateCarSeriesDto }
  >({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: ({ id, data }) => editOne(data, id),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries],
      });
      // addNotification({
      //   message: 'Успех!',
      //   type: 'success',
      //   duration: 3000,
      // });
    },
    onError: (data) => {
      // addNotification({
      //   message: data.response?.data.detail || 'Error!',
      //   type: 'success',
      //   duration: 3000,
      // });
    },
  });
};
