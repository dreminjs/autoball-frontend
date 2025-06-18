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

export const usePostCarSeries = (): {
  mutate: UseMutateFunction<
    ICarSeries,
    AxiosError<IServerError>,
    ICreateCarSeriesDto
  >;
} & ApiOperationState => {
  const { mutate, isSuccess, isPending, isError, error } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    ICreateCarSeriesDto
  >({
    mutationFn: (data: ICreateCarSeriesDto) => createOne(data),
    mutationKey: [SERVICE_URLS.carseries],
  });

  return { mutate, isSuccess, isPending, isError, error };
};

export const useDeleteCarSeries = (): {
  mutate: UseMutateFunction<ICarSeries, AxiosError<IServerError>, string>;
} & ApiOperationState => {
  const { isError, isPending, isSuccess, mutate, error } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    string
  >({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: (id: string) => deleteOne(id),
  });

  return { isError, isPending, isSuccess, mutate, error };
};

export const useEditCarSeries = (): {
  mutate: UseMutateFunction<
    ICarSeries,
    AxiosError<IServerError>,
    { id: string; data: IUpdateCarSeriesDto }
  >;
} & ApiOperationState => {
  const { isError, isPending, isSuccess, mutate, error } = useMutation<
    ICarSeries,
    AxiosError<IServerError>,
    { id: string; data: IUpdateCarSeriesDto }
  >({
    mutationKey: [SERVICE_URLS.carseries],
    mutationFn: ({ id, data }) => editOne(data, id),
  });

  return { isError, isPending, isSuccess, mutate, error };
};