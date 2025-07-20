import { useMutation } from '@tanstack/react-query';
import { OrderForm } from '../model/types';
import { index } from './service';

export const usePostOrder = () => {
  return useMutation({
    mutationFn: (data: OrderForm) => index(data),
  });
};
