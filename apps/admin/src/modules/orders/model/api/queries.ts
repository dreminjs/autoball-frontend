import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import {
  IFindManyDto,
  IPatchOrderStatusDto,
  PostOrderProductsDto,
} from '../types/dto';
import { createOne, findMany, patchOne } from './services';
import { useNotificationActions } from '../../../notifications';

export const useGetOrders = (dto: IFindManyDto) => {
  return useQuery({
    queryKey: [SERVICE_URLS.orders, dto],
    queryFn: () => findMany(dto),
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
      remove('info')
      addSuccess()
      callbackFn()
    },
    onError: () => {
      remove('info')
      addError()
      callbackFn()

    }
  });

  const handleMutate = (data: PostOrderProductsDto) => {
    addInfo();
    mutate(data);
    callbackFn()
  };

  return {mutate: handleMutate, ...props}
};
