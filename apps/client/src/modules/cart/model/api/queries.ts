import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { addCartItem, clearCart, deleteCartItem, findCart } from './service';
import { QUERY_KEYS, SERVICE_URLS } from '@/shared/constants';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { cartItemsAtom } from '@/modules/products/model/product-atoms-page';

export const useGetMyCart = () => {
  const setCartItems = useSetAtom(cartItemsAtom);

  const states = useQuery({
    queryKey: [SERVICE_URLS.cart, QUERY_KEYS.items],
    queryFn: () => findCart(),
  });

  useEffect(() => {
    if (states.isSuccess && states.data?.length) {
      setCartItems(states.data);
    }
  }, [setCartItems, states.data, states.isSuccess]);

  return states;
};

export const useAddCartItem = () => {
  const queryClient = useQueryClient();

  const states = useMutation({
    mutationKey: [SERVICE_URLS.cart],
    mutationFn: async (productId: string) => addCartItem(productId),
  });

  useEffect(() => {
    if (states.isSuccess) {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.cart, QUERY_KEYS.items],
      });
    }
  }, [queryClient, states.isSuccess]);

  return states;
};

export const useClearCart = () => {
  const setCartItems = useSetAtom(cartItemsAtom);
  const queryClient = useQueryClient();

  const states = useMutation({
    mutationKey: [SERVICE_URLS.cart],
    mutationFn: async () => clearCart(),
  });

  useEffect(() => {
    if (states.isSuccess) {
      setCartItems([]);
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.cart, QUERY_KEYS.items],
      });
    }
  }, [queryClient, setCartItems, states]);
  return states;
};

export const useDeleteCartItem = () => {
  const queryClient = useQueryClient();

  const states = useMutation({
    mutationKey: [SERVICE_URLS.cart],
    mutationFn: async (id: string) => deleteCartItem(id),
  });
  useEffect(() => {
    if (states.isSuccess) {
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.cart],
      });
    }
  }, [queryClient, states]);

  return states;
};
