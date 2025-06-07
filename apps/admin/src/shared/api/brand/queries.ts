import { useMutation, useQuery } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../constants';
import { createOne, deleteOne, findMany } from './service';
import { ApiOperationState } from '../../interfaces/api-operation-state.interface';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { IServerError } from '../../interfaces/server-error';
import { AxiosError } from 'axios';
import { FiltrationDto } from '../../interfaces/brands/filtration.dto';
import { CarBrandForm } from '../../../modules/car-brands/model/types/car-brand';

export const useGetCarBrands = ({
  search,
}: FiltrationDto): {
  data?: ICarBrand[];
} & ApiOperationState => {
  const { isError, isPending, isSuccess, data, error } = useQuery<
    ICarBrand[],
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carbrand],
    queryFn: () => findMany({ search }),
  });

  return {
    isError,
    isPending,
    isSuccess,
    data,
    error: error || null,
  };
};

export const usePostCarBrand = (): {
  mutate: (data: CarBrandForm) => void;
} & ApiOperationState => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation<
    ICarBrand,
    AxiosError<IServerError>,
    CarBrandForm
  >({
    mutationFn: (data: CarBrandForm) => createOne(data),
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

export const useDeleteCarBrand = (): {
  mutate: (id: string) => void;
} & ApiOperationState => {
  const { mutate, isError, isPending, isSuccess, error } = useMutation<
    ICarBrand,
    AxiosError<IServerError>,
    string
  >({
    mutationFn: (id: string) => deleteOne(id),
    mutationKey: [SERVICE_URLS.carbrand],
  });

  return { mutate, isError, isPending, isSuccess, error };
};

export const useEditCarBrand = () => {
  return {};
};
