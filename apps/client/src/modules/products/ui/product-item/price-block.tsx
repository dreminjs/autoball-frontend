import { IProduct } from '@autoball-frontend/shared-types';
import { useAtomValue, useSetAtom } from 'jotai';
import { FC } from 'react';
import {
  cartItemsAtom,
  isCartWarningOpenAtom,
} from '../../model/product-atoms-page';
import { useAddCartItem } from '@/modules/cart';
import { isAuthAtom } from '@/app/auth.atom';

type Props = Pick<IProduct, 'price' | 'currency' | 'discount' | 'count' | 'id'>;

export const PriceBlock: FC<Props> = ({
  price,
  currency,
  discount,
  count,
  id,
}) => {
  const cartItems = useAtomValue(cartItemsAtom);

  const isInCart = cartItems.some((el) => el.product_id === id);

  const { mutate } = useAddCartItem();

  const isAuth = useAtomValue(isAuthAtom);

  const setIsCartWarningOpen = useSetAtom(isCartWarningOpenAtom);

  const handleAddCartItem = () => {
    if (!isAuth) {
      setIsCartWarningOpen(true);
    }

    mutate(id);
  };
  
  return (
    <div className="flex flex-wrap justify-between items-center mt-auto pt-3 border-t border-gray-100">
      <div className="flex items-baseline gap-2 mb-2 sm:mb-0">
        <span className="text-xl font-bold text-gray-900">
          {price} {currency}
        </span>
        {discount > 0 && (
          <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
            -{discount}%
          </span>
        )}
      </div>

      <div className="flex items-center gap-3">
        {!isInCart ? (
          <button onClick={handleAddCartItem}>Заказать</button>
        ) : (
          <p>Уже в корзине</p>
        )}

        <span className="text-sm text-gray-500">{count} шт.</span>
      </div>
    </div>
  );
};
