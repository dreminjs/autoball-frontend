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
  ICreateCarSeriesDto,
  IUpdateCarSeriesDto,
} from '../model/types/carseries.interface';

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

export const usePostCarSeries = (
  brandId: string | null
): {
  mutate: UseMutateFunction<
    ICarSeries,
    AxiosError<IServerError>,
    ICreateCarSeriesDto
  >;
} & ApiOperationState => {
  const queryClient = useQueryClient();

  return useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    ICreateCarSeriesDto
  >({
    mutationFn: (data: ICreateCarSeriesDto) => createOne(data),
    mutationKey: [SERVICE_URLS.carseries],
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries, brandId || ''],
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
      //   type: 'error',
      //   duration: 3000,
      // });
    },
  });
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
