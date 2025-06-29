import { useInfiniteQuery } from '@tanstack/react-query';
import {
  ICarBrand,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../../shared/types/server-error';
import { BrandType } from '../../../../../shared/types/brands/type';
import { findMany } from './service';

export interface IArgs {
  type: BrandType,
  search: string
}

export const useGetBrands = (args: IArgs) => {
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarBrand>,
    AxiosError<IServerError>
  >({
    queryKey: [Object.values(args)],
    queryFn: ({ pageParam }) => findMany({
      type: args.type,
      search: args.search,
      pageParam
    }),
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};
