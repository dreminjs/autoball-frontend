import { useGetMyCart } from '@/modules/cart';
import { NavigationItem } from './navigation-item';

export const CartButton = () => {
  const { data: cartInfo } = useGetMyCart();

  return (
    <NavigationItem
      to={'/korzina'}
      content={`Корзина ${cartInfo?.length ? `(${cartInfo?.length})` : ''}`}
    />
  );
};
