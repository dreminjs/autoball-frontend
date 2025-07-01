import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import {
  IFindManyDto,
  IPatchOrderStatusDto,
  PostOrderProductsDto,
} from '../types/dto';
import { createOne, findMany, findOne, patchOne } from './services';
import { useNotificationActions } from '../../../notifications';
import { IInfiteScrollResponse, IOrder } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';

export const useGetOrders = (dto: Pick<IFindManyDto, 'status'>) => {
  return useInfiniteQuery<IInfiteScrollResponse<IOrder>, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.orders, dto],
    queryFn: ({ pageParam }) => findMany({status: dto.status, cursor: pageParam, take: 10}),
    refetchOnWindowFocus: false,
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam, allPageParams) =>
      lastPage.next_cursor,
  });
};

export const usePatchOrderStatus = () => {
  const queryClient = useQueryClient();

  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { mutate, ...props } = useMutation({
    mutationKey: [SERVICE_URLS.orders],
    mutationFn: (dto: IPatchOrderStatusDto) => patchOne(dto),
    onSuccess: () => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
      });
      addSuccess();
    },
    onError: (data) => {
      remove('info');
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.carbrand],
      });
      addError();
    },
  });

  const handleMutate = (data: IPatchOrderStatusDto) => {
    addInfo();
    mutate(data);
  };
  return { ...props, mutate: handleMutate };
};

export const usePostOrder = (callbackFn: () => void) => {
  const { addError, addInfo, addSuccess, remove } = useNotificationActions();

  const { mutate, ...props } = useMutation({
    mutationFn: (data: PostOrderProductsDto) => createOne(data),
    onSuccess: () => {
      remove('info');
      addSuccess();
      callbackFn();
    },
    onError: () => {
      remove('info');
      addError();
      callbackFn();
    },
  });

  const handleMutate = (data: PostOrderProductsDto) => {
    addInfo();
    mutate(data);
    callbackFn();
  };

  return { mutate: handleMutate, ...props };
};


export const useGetOrder = (id?: string) => {

  return useQuery({
    queryFn: () => findOne(id),
    queryKey: [SERVICE_URLS.orders, id]
  })
}