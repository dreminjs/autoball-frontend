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
import { AxiosError } from 'axios';
import { IServerError } from '../../../shared/interfaces/server-error';
import { IPostCarPart } from '../model/schemas/post-car-part';
import { SERVICE_URLS } from '../../../shared/constants';
import { useNotificationActions } from '../../notifications';
import { useCarPartModal } from '../model/hooks/use-car-parts-modal';
import { useChooseCarPart } from '../model/hooks/use-choose-car-part';
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

export const useDeleteCarPart = () => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChooseCarPart();

  const { mutate, ...props } = useMutation({
    mutationFn: (id: string) =>
      instance.delete(`${SERVICE_URLS.carpart}/${id}`),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      onCancel();
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

  return { ...props, mutate: handleMutate };
};

export const usePostCarPart = () => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { closeModal } = useCarPartModal();
  const { mutate, ...props } = useMutation({
    mutationFn: (brand: IPostCarPart) =>
      instance.post(SERVICE_URLS.carpart, brand),
    onSuccess: () => {
      closeModal();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      addSuccess();
    },
    onError: (data) => {
      closeModal();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: IPostCarPart) => {
    addInfo();
    mutate(data);
  };

  return { ...props, mutate: handleMutate };
};

export const useEditCarPart = () => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { onCancel } = useChooseCarPart();

  const { mutate, ...props } = useMutation({
    mutationFn: (brand: IPostCarPart) =>
      instance.put(`${SERVICE_URLS.carpart}/${brand.id}`, brand),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      onCancel();
      addSuccess();
    },
    onError: (data) => {
      onCancel();
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: IPostCarPart) => {
    addInfo();
    mutate(data);
  };

  return { ...props, mutate: handleMutate };
};
