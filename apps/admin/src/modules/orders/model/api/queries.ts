import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import { IFindManyDto, IPatchOrderStatusDto } from '../types/dto';
import { findMany, patchOne } from './services';
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
