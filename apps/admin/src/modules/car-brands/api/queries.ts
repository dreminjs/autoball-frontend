import {
  ICarBrand,
  IInfiteScrollQueryParameters,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
  QueryObserverResult,
  RefetchOptions,
  useInfiniteQuery,
  UseMutateFunction,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SERVICE_URLS } from '../../../shared/constants';
import { ApiOperationState } from '../../../shared/interfaces/api-operation-state.interface';
import { IServerError } from '../../../shared/interfaces/server-error';
import { CarBrandFormDto } from '../model/types/car-brand';
import { createOne, findMany, findOne } from './servies';
import { deleteOne } from '../../brand-series/api/service';
import { useSetAtom } from 'jotai';

export const usePostCarBrand = (): {
  mutate: UseMutateFunction<
    ICarBrand,
    AxiosError<IServerError>,
    CarBrandFormDto
  >;
} & ApiOperationState => {

  // const addNotification = useSetAtom(addNotificationAtom)

  return useMutation<ICarBrand, AxiosError<IServerError>, CarBrandFormDto>({
    mutationFn: (data: CarBrandFormDto) => createOne({ ...data }),
    mutationKey: [SERVICE_URLS.carbrand],
    onSuccess:() => {
      // addNotification({
      //   message: 'Успех!',
      //   type: "success",
      //   duration: 3000
      // })
    },
    onError:(data) => {
      //  addNotification({
      //   message: data.response?.data.detail || "Error!",
      //   type: "success",
      //   duration: 3000
      // })
    }
  });
};

export const useGetBrand = (
  id: string | null
): { data?: ICarBrand } & ApiOperationState => {
  return useQuery<ICarBrand, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.carbrand],
    queryFn: () => findOne(id || ''),
    enabled: id !== null,
  });
};

export const useGetCarBrands = ({
  search,
  limit,
}: Omit<IInfiteScrollQueryParameters, 'cursor'>) => {
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarBrand>,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carbrand, search],
    queryFn: ({ pageParam }) => findMany({ search, cursor: pageParam, limit }),
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};

export const useDeleteCarBrand = (): {
  mutate: UseMutateFunction<
    ICarBrand,
    AxiosError<IServerError>,
    string,
    unknown
  >;
  reset: () => void;
} & ApiOperationState => {


  return useMutation<ICarBrand, AxiosError<IServerError>, string>({
    mutationFn: (id: string) => deleteOne(id),
    mutationKey: [SERVICE_URLS.carbrand],
      onSuccess:() => {
      // addNotification({
      //   message: 'Успех!',
      //   type: "success",
      //   duration: 3000
      // })
    },
    onError:(data) => {
      //  addNotification({
      //   message: data.response?.data.detail || "Error!",
      //   type: "success",
      //   duration: 3000
      // })
    }
  });
};

export const useEditBrand = () => {
  return {};
};
