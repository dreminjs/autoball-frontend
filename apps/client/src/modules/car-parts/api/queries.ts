import {
  useQuery,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { instance } from '../../../shared/api/api-instance';
import {
  IInfiteScrollResponse,
  ICarPart,
} from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/types/server-error';
import { SERVICE_URLS } from '../../../shared/constants';
import { findMany } from './services';

export const useGetCarParts = (params = {}) => {
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarPart>,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carpart, params],
    queryFn: async ({ pageParam }) => {
      const cursor = typeof pageParam === 'number' ? pageParam : 0;
      return await findMany({ cursor });
    },
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};

export const useGetCarPart = (id: string) => {
  return useQuery<ICarPart>({
    queryKey: [SERVICE_URLS.carpart, id],
    queryFn: async () => {
      return (await instance.get(`${SERVICE_URLS.carpart}/${id}`)).data;
    },
    enabled: !!id,
  });
};

