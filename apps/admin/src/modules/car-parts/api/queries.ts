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
import { IMutateArgsDto } from '../../../shared';
import { useCarPartModal } from '../model/hooks/use-car-parts-modal';

export const useGetCarParts = (params = {}) => {
  return useInfiniteQuery<
    IInfiteScrollResponse<ICarPart>,
    AxiosError<IServerError>
  >({
    queryKey: [SERVICE_URLS.carpart, params],
    queryFn: async () => {
      return (await instance.get(SERVICE_URLS.carpart, { params })).data;
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
  const { closeModal } = useCarPartModal();

  const { mutate, ...props } = useMutation({
    mutationFn: (id: string) =>
      instance.delete(`${SERVICE_URLS.carpart}/${id}`),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      addSuccess({ duration: 3000 });
    },
    onError: (data) => {
      remove('info');
      addError({ duration: 3000 });
    },
  });

  const handleMutate = (args: IMutateArgsDto<string>) => {
    addInfo();
    mutate(args.data, {
      onSuccess: closeModal,
      onError: closeModal,
    });
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
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      addSuccess({ duration: 3000 });
    },
    onError: (data) => {
      remove('info');
      addError({ duration: 3000 });
    },
  });

  const handleMutate = (args: IMutateArgsDto<IPostCarPart>) => {
    addInfo();
    mutate(args.data, {
      onSuccess: closeModal,
      onError: closeModal,
    });
  };

  return { ...props, mutate: handleMutate };
};

export const useEditCarPart = () => {
  const queryClient = useQueryClient();
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { closeModal } = useCarPartModal();

  const { mutate, ...props } = useMutation({
    mutationFn: (brand: IPostCarPart) =>
      instance.put(`${SERVICE_URLS.carpart}/${brand.id}`, brand),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carpart],
      });
      addSuccess({ duration: 3000 });
    },
    onError: (data) => {
      remove('info');
      addError({ duration: 3000 });
    },
  });

  const handleMutate = (args: IMutateArgsDto<IPostCarPart>) => {
    addInfo();
    mutate(args.data, {
      onSuccess: closeModal,
      onError: closeModal,
    });
  };

  return { ...props, mutate: handleMutate };
};
