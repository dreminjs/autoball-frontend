import {
  useInfiniteQuery,
} from '@tanstack/react-query';
import { ICarSeries, IInfiteScrollResponse } from '@autoball-frontend/shared-types';
import { SERVICE_URLS } from '../../../shared/constants';
import { findManyByBrandId } from './service';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/types/server-error';

export const useGetCarSeriesByBrandId = (brandId: string | null) => {
  return useInfiniteQuery<IInfiteScrollResponse<ICarSeries>, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.carseries, brandId],
    queryFn: () => findManyByBrandId(brandId || ''),
    enabled: brandId !== null && brandId !== "",
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};

