import { useMutation, useQuery } from '@tanstack/react-query';
import { ApiOperationState } from '../../../shared/interfaces/api-operation-state.interface';
import { ICarSeries } from '@autoball-frontend/shared-types';
import { SERVICE_URLS } from '../../../shared/constants';
import { createOne, findManyByBrandId } from './service';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/interfaces/server-error';
import { ICreateCarSeriesDto } from '../model/types/carseries.interface';

export const useGetCarSeriesByBrandId = (
  brandId: string | null
): {
  data?: ICarSeries[];
} & ApiOperationState => {
  const { data, isSuccess, isPending, isError, error } = useQuery<
    ICarSeries[],
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carseries],
    queryFn: () => findManyByBrandId(brandId || ""),
    enabled: brandId !== null,
    refetchOnWindowFocus: false
  });

  return { data, isSuccess, isPending, isError, error };
};

export const usePostCarSeries = (): {
  mutate: (data: ICreateCarSeriesDto) => void;
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
