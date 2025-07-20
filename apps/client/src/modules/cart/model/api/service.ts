import { instance } from '@/shared/api/api-instance';
import { QUERY_KEYS, SERVICE_URLS } from '@/shared/constants';
import { ICartItem } from '../types/cart.types';

export const findCart = async (): Promise<ICartItem[]> =>
  (await instance.get(`${SERVICE_URLS.cart}`)).data;

export const addCartItem = async (productId: string): Promise<ICartItem> =>
  await instance.post(`${SERVICE_URLS.cart}/${QUERY_KEYS.items}`, {
    product_id: productId,
  });

export const clearCart = async () =>
  await instance.delete(`${SERVICE_URLS.cart}/${QUERY_KEYS.items}`);

export const deleteCartItem = async (id: string) =>
  await instance.delete(`${SERVICE_URLS.cart}/${QUERY_KEYS.items}/${id}`);


