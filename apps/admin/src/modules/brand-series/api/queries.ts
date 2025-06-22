import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ICarSeries } from '@autoball-frontend/shared-types';
import { SERVICE_URLS } from '../../../shared/constants';
import { createOne, deleteOne, editOne, findManyByBrandId } from './service';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/interfaces/server-error';
import {
  IPostCarSeriesForm,
  IEditCarSeriesDto,
} from '../model/types/carseries.interface';
import { useNotificationActions } from '../../notifications';
import { useCarSeriesModal } from '../model/hooks/use-car-series-modal';
import { useChooseSeries } from '../model/hooks/use-choose-series';

export const useGetCarSeriesByBrandId = (brandId: string | null) => {
  return useQuery<ICarSeries[], AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.carseries, brandId],
    queryFn: () => findManyByBrandId(brandId || ''),
    enabled: brandId !== null,
    refetchOnWindowFocus: false,
  });
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
    mutationFn: (data: IPostCarSeriesForm) =>
      createOne({
        ...data,
        year: `${data.from} - ${data.to}`,
        car_brand_id: brandId,
      }),
    mutationKey: [SERVICE_URLS.carseries],
    onSuccess: () => {
      closeModal();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries, brandId || ''],
      });
      addSuccess();
    },
    onError: (data) => {
      closeModal();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: IPostCarSeriesForm) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};

export const useDeleteCarSeries = (brandId?: string) => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChooseSeries();

  const { mutate, ...props } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    string
  >({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: (id: string) => deleteOne(id),
    onSuccess: () => {
      onCancel();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries, brandId || ''],
      });
      addSuccess();
    },
    onError: () => {
      onCancel();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: string) => {
    addInfo();
    mutate(data);
  };
  return { mutate: handleMutate, ...props };
};

export const useEditCarSeries = (id: string) => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChooseSeries();

  const { mutate, ...props } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    { id: string; data: IEditCarSeriesDto }
  >({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: ({ id, data }) => editOne(data, id),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carseries],
      });
      onCancel();
      addSuccess();
    },
    onError: (data) => {
      remove('info');
      onCancel();
      addError();
    },
  });

  const handleMutate = (data: IEditCarSeriesDto) => {
    addInfo();
    mutate({
      id,
      data: data,
    });
  };

  return { mutate: handleMutate, ...props };
};
