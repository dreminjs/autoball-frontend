import { useClearCart } from '../../model/api/queries';
import { useAtomValue } from 'jotai';
import { cartItemsAtom } from '@/modules/products/model/product-atoms-page';
import { FC } from 'react';

interface IProps {
  onOpen: () => void
}

export const CartControls: FC<IProps> = ({ onOpen }) => {
  const { mutate } = useClearCart();

  const cartItems = useAtomValue(cartItemsAtom);

  return (
    <>
      <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg mt-4">
        <div>
          <span className="font-medium">{cartItems.length} Кол-во</span>
          <span className="ml-2 text-gray-600">
            Цена: BYN{' '}
            {cartItems.reduce((acc, el) => {
              return (acc += el.price);
            }, 0)}
          </span>
        </div>

        <div className='flex gap-2'>
          {cartItems.length > 0 && (
            <button
              onClick={() => onOpen()}
              disabled={cartItems.length === 0}
              className={`px-4 py-2 rounded-md ${
                cartItems.length === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              }`}
            >
              Оформить заказ
            </button>
          )}
          <button
            onClick={() => mutate()}
            disabled={cartItems.length === 0}
            className={`px-4 py-2 rounded-md ${
              cartItems.length === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-red-500 hover:bg-red-600 text-white'
            }`}
          >
            Очистить корзину
          </button>
        </div>
      </div>
      <div></div>
    </>
  );
};
