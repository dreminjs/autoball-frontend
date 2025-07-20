import { FaTrash } from 'react-icons/fa';
import { ICartItem } from '../../model/types/cart.types';
import { FC } from 'react';
import Image from 'next/image';
import { useDeleteCartItem } from '../../model/api/queries';

type Props = ICartItem;

export const CartItem: FC<Props> = (props) => {
  const finalPrice = props.price * (1 - props.discount / 100);

  const { mutate } = useDeleteCartItem()

  return (
    <div className="flex items-start p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
      <Image
        width={250}
        height={150}
        src={`http://localhost:9000/avtobol/${props.picture}`}
        alt={props.article}
        className="w-20 h-20 object-contain rounded-md mr-4"
      />

      <div className="flex-1">
        <h3 className="font-medium text-gray-900">{props.article}</h3>
        <p className="text-sm text-gray-500">
          {props.car_brand_name} {props.car_series_name} • {props.car_part_type}
        </p>

        <div className="flex items-center mt-2">
          {props.discount > 0 && (
            <span className="text-gray-400 line-through mr-2">
              BYN {props.price.toFixed(2)}
            </span>
          )}
          <span className="font-bold text-gray-900">
            BYN {finalPrice.toFixed(2)}
          </span>
          {props.discount > 0 && (
            <span className="ml-2 bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
              -{props.discount}%
            </span>
          )}
        </div>
      </div>

      <button
        onClick={() => mutate(props.id)}
        className="mt-2 text-gray-400 hover:text-red-500 transition-colors p-1"
        aria-label="Remove item"
      >
        <FaTrash size={16} />
      </button>
    </div>
  );
};
