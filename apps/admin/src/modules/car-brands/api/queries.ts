import {
  ICarBrand,
  IInfiteScrollQueryParameters,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { SERVICE_URLS } from '../../../shared/constants';
import { ApiOperationState } from '../../../shared/types/api-operation-state.interface';
import { IServerError } from '../../../shared/types/server-error';
import { CarBrandForm } from '../model/types/car-brand';
import { createOne, deleteOne, editOne, findMany, findOne } from './servies';
import { useCarBrandModal } from '../model/hooks/use-car-brand-modal';
import { useNotificationActions } from '../../notifications';
import { useChooseBrand } from '../model/hooks';
import { TEditBrandDto } from '../model/dto/edit-brand.dto';

export const usePostCarBrand = () => {
  const queryClient = useQueryClient();

  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { closeModal } = useCarBrandModal();

  const { mutate, ...props } = useMutation<
    ICarBrand,
    AxiosError<IServerError>,
    CarBrandForm
  >({
    mutationFn: (data: CarBrandForm) => createOne({ ...data }),
    mutationKey: [SERVICE_URLS.carbrand],
    onSuccess: () => {
      closeModal();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
      });
      addSuccess();
    },
    onError: (data) => {
      // closeModal();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
      });
      addError();
    },
  });

  const handleMutate = (data: CarBrandForm) => {
    addInfo();
    mutate(data);
  };
  return { ...props, mutate: handleMutate };
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

export const useDeleteCarBrand = () => {
  const queryClient = useQueryClient();

  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { onCancel } = useChooseBrand();

  const { mutate, ...props } = useMutation<
    ICarBrand,
    AxiosError<IServerError>,
    string
  >({
    mutationFn: (id: string) => deleteOne(id),
    mutationKey: [SERVICE_URLS.carbrand],
    onSuccess: () => {
      onCancel();
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
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

export const useEditBrand = () => {
  const queryClient = useQueryClient();

  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { mutate, ...props } = useMutation({
    mutationFn: (data: TEditBrandDto) => editOne(data),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
      });
      addSuccess();
    },
    onError: (data) => {
      remove('info');
      addError();
    },
  });
  const handleMutate = (data: TEditBrandDto) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
