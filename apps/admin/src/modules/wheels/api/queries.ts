import {
  useQuery,
  useMutation,
  useInfiniteQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { instance } from '../../../shared/api/api-instance';
import {
  IInfiteScrollResponse,
  ICarPart,
} from '@autoball-frontend/shared-types';
import { IPostWheelComponentBrand } from '../model/schemas/post-wheel-component-brand';
import { getComponentBrandType } from '../../../shared/lib/get-component-brand-type';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/interfaces/server-error';

export const useGetWheelBrands = (params = {}) => {
  const path = getComponentBrandType();
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarPart>,
    AxiosError<IServerError>
  >({
    queryKey: [path, params],
    queryFn: async () => {
      return (await instance.get(path, { params })).data;
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

export const useDeleteWheelBrand = () => {
  const path = getComponentBrandType();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: string) => instance.delete(`${path}/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [path],
      });
    },
  });
};

export const usePostWheelBrand = () => {
  const path = getComponentBrandType();

  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (brand: IPostWheelComponentBrand) => instance.post(path, brand),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [path],
      });
    },
  });
};

export const useEditWheelBrand = () => {
  const path = getComponentBrandType();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (brand: Partial<IPostWheelComponentBrand>) =>
      instance.put(`${path}/${brand.id}`, brand),
     onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [path],
      });
    },
  });
};
