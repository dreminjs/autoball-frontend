import { useMutation, useQuery } from '@tanstack/react-query';
import { QUERY_KEYS } from '../../../shared/constants';
import { createOne, deleteOne, findMany } from './service';
import { ApiOperationState } from '../../../shared/interfaces/api-operation-state.interface';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { IServerError } from '../../../shared/interfaces/server-error';
import { AxiosError } from 'axios';
import { FiltrationDto } from '../dto/filtration.dto';
import { CarBrandForm } from '../model/types/car-brand';

export const useGetCarBrands = ({
  search,
}: FiltrationDto): {
  data?: ICarBrand[];
} & ApiOperationState => {
  const { isError, isPending, isSuccess, data, error } = useQuery<
    ICarBrand[],
    AxiosError<IServerError>
  >({
    queryKey: [QUERY_KEYS.carbrand],
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
    mutationKey: [QUERY_KEYS.carbrand],
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
    mutationKey: [QUERY_KEYS.carbrand],
  });

  return { mutate, isError, isPending, isSuccess, error };
};

export const useEditCarBrand = () => {
  return {};
};
