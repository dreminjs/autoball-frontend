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
  WheelComponent,
} from '@autoball-frontend/shared-types';
import { IPostWheelComponentBrand } from '../model/schemas/post-wheel-component-brand';
import { getComponentBrandType } from '../../../shared/lib/get-component-brand-type';
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/types/server-error';
import { useWheelComponentBrandModal } from '../model/hooks/use-wheel-component-brand-modal';
import { useNotificationActions } from '../../notifications';
import { useChoosedWheelComponentBrand } from '../model/hooks/use-choose-wheel-component-brand';
import { findMany } from './services';

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

export const useDeleteWheelBrand = () => {
  const path = getComponentBrandType();
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChoosedWheelComponentBrand();

  const { mutate, ...props } = useMutation({
    mutationFn: (id: string) => instance.delete(`${path}/${id}`),
    onSuccess: () => {
      onCancel();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [path],
      });
      addSuccess();
    },
    onError: (data) => {
      onCancel();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: string) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};

export const usePostWheelBrand = () => {
  const path = getComponentBrandType();
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { closeModal } = useWheelComponentBrandModal();

  const { mutate, ...props } = useMutation({
    mutationFn: (brand: IPostWheelComponentBrand) => instance.post(path, brand),
    onSuccess: () => {
      closeModal();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [path],
      });
      addSuccess();
    },
    onError: (data) => {
      closeModal();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: IPostWheelComponentBrand) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};

export const useEditWheelBrand = () => {
  const path = getComponentBrandType();
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChoosedWheelComponentBrand();

  const { mutate, ...props } = useMutation({
    mutationFn: (brand: Partial<IPostWheelComponentBrand>) =>
      instance.put(`${path}/${brand.id}`, brand),
    onSuccess: () => {
      onCancel();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [path],
      });
      addSuccess();
    },
    onError: (data) => {
      onCancel();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: IPostWheelComponentBrand) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
