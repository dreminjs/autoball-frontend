import { cartItemsAtom } from '@/modules/products/model/product-atoms-page';
import { useAtomValue } from 'jotai';
import { CartItem } from './cart-item';

export const CartList = () => {
  const cartItems = useAtomValue(cartItemsAtom);

  return (
    <ul className='border border-gray-200 rounded-lg overflow-hidden'>
      {cartItems.map((el) => (
        <CartItem key={el.id} {...el} />
      ))}
    </ul>
  );
};
