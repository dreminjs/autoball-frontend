import { ICarBrand } from '@autoball-frontend/shared-types';
import { useMutation, useQuery } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SERVICE_URLS } from '../../../shared/constants';
import { ApiOperationState } from '../../../shared/interfaces/api-operation-state.interface';
import { IServerError } from '../../../shared/interfaces/server-error';
import { CarBrandFormDto } from '../model/types/car-brand';
import { createOne, findOne } from './servies';

export const usePostCarBrand = (): {
  mutate: (data: CarBrandFormDto) => void;
} & ApiOperationState => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation<
    ICarBrand,
    AxiosError<IServerError>,
    CarBrandFormDto
  >({
    mutationFn: (data: CarBrandFormDto) =>
      createOne({ ...data  }),
    mutationKey: [SERVICE_URLS.carbrand],
  });

  return {
    mutate,
    isError,
    isPending,
    isSuccess,
    error,
  };
};

export const useGetBrand = (
  id: string | null
): { data?: ICarBrand } & ApiOperationState => {
  const { data, isError, isPending, isSuccess, error } = useQuery<
    ICarBrand,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carbrand],
    queryFn: () => findOne(id || ''),
    enabled: id !== null,
  });

  return { data, isError, isPending, isSuccess, error };
};

export const useEditBrand = () => {
  
    
  return {}
}