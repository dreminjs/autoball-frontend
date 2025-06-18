import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
  useInfiniteQuery,
  useMutation,
} from '@tanstack/react-query';
import { SERVICE_URLS } from '../../constants';
import { deleteOne, findMany } from './service';
import { ApiOperationState } from '../../interfaces/api-operation-state.interface';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { IServerError } from '../../interfaces/server-error';
import { AxiosError } from 'axios';
import { FiltrationDto } from '../../interfaces/brands/filtration.dto';
import { IInfiteScrollResponse } from '../../interfaces/server-response';

export const useGetCarBrands = ({
  search,
}: Omit<FiltrationDto,"cursor">): {
  data?: InfiniteData<IInfiteScrollResponse<ICarBrand>>;
  fetchNextPage: (
    options?: FetchNextPageOptions
  ) => Promise<
    InfiniteQueryObserverResult<
      InfiniteData<IInfiteScrollResponse<ICarBrand>>,
      AxiosError<IServerError>
    >
  >;
  refetch: (
    options?: RefetchOptions
  ) => Promise<
    QueryObserverResult<InfiniteData<IInfiteScrollResponse<ICarBrand>>>
  >;
} & ApiOperationState => {
  const { isError, isPending, isSuccess, data, error, refetch, fetchNextPage } =
    useInfiniteQuery<
      IInfiteScrollResponse<ICarBrand>,
      AxiosError<IServerError>
    >({
      queryKey: [SERVICE_URLS.carbrand, search],
      queryFn: ({ pageParam }) => findMany({ search, cursor: pageParam }),
      refetchOnWindowFocus: false,
      initialPageParam: 0,
      getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
        lastPage.next_cursor,
    });

  return {
    refetch,
    data,
    isError,
    isPending,
    isSuccess,
    fetchNextPage,
    error: error || null,
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
