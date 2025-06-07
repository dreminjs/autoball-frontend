import { useQuery } from '@tanstack/react-query';
import { findMany } from './services';
import { IGetCarPartsQueryParameters } from '../types/get-carparts-query-parameters';

export const useGetCarParts = (dto: IGetCarPartsQueryParameters) => {
  const { data, isError, isSuccess, isPending } = useQuery({
    queryKey: [dto.search, dto.condition],
    queryFn: () => findMany(dto),
  });

  return {
    data,
    isError,
    isSuccess,
    isPending,
  };
};
