import {
  useQuery,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { instance } from '../../../shared/api/api-instance';
import {
  IInfiteScrollResponse,
  ICarPart,
  WheelComponent,
} from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/types/server-error';
import { findMany } from './services';
import { getComponentBrandType } from '@/shared/lib/get-component-brand-type';

export const useGetWheelBrands = (
  params: { take: number; search?: string } = { take: 5 },
  data?: WheelComponent
) => {
  const path = data ? `${data}brand` : getComponentBrandType();
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarPart>,
    AxiosError<IServerError>
  >({
    queryKey: [path, params],
    queryFn: async ({ pageParam }) => {
      return await findMany(path, { ...params, cursor: pageParam });
    },
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};

export const useGetWheelBrand = (id: string) => {
  const path = getComponentBrandType();

  return useQuery<ICarPart>({
    queryKey: [path, id],
    queryFn: async () => {
      return (await instance.get(`${path}/${id}`)).data;
    },
    enabled: !!id,
  });
};
