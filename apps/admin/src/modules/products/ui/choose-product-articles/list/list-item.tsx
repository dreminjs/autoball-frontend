import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ItemInfo } from '../../item-info';
import { useChooseOrderProductInfo } from '../../../../orders/model/hooks/post-page/use-choose-order-product-info';

type TProduct = Pick<
  IProduct,
  | 'article'
  | 'car_part_name'
  | 'car_series_name'
  | 'car_brand_name'
  | 'disc_brand_name'
  | 'tire_brand_name'
  | "disc_id"
  | "tire_id"
  | 'price'
  | 'currency'
  |  'id'
>;

type Props = TProduct;
export const OrderItem: FC<Props> = (props) => {
  const { onChooseOrderProductInfo, onRemove, isProductSelected } =
    useChooseOrderProductInfo();

  const isSelected = isProductSelected(props.article);

  return (
    <li
      className={`w-full flex items-center border-b mb-2 px-2 border-gray-200 last:border-b-0 transition-colors ${
        isSelected
          ? 'bg-blue-50 ring-2 ring-blue-500'
          : 'hover:bg-gray-50 focus:bg-gray-100'
      }`}
    >
      <button
        type="button"
        onClick={() =>
          onChooseOrderProductInfo({
            article: props.article,
            price: props.price,
            currency: props.currency,
            car_brand_name: props.car_brand_name,
            car_part_name: props.car_part_name,
            car_series_name: props.car_series_name,
            disc_brand_name: props.disc_brand_name,
            tire_brand_name: props.tire_brand_name,
            id: props.id
          })
        }
        className={`w-full flex items-center justify-between text-left p-4 focus:outline-none focus:ring- rounded-md `}
      >
        <div className="space-y-1">
          {props.currency && (
            <ItemInfo
              title={props.currency}
              value={props.price.toString()}
              isSelected={isSelected}
            />
          )}
          {props.article && (
            <ItemInfo
              title={'Артикль'}
              value={props.article}
              isSelected={isSelected}
            />
          )}

          {props.car_brand_name && (
            <ItemInfo
              title={'Бренд'}
              value={props.car_brand_name}
              isSelected={isSelected}
            />
          )}

          {props.car_series_name && (
            <ItemInfo
              title={'Серия'}
              value={props.car_series_name}
              isSelected={isSelected}
            />
          )}

          {props.car_part_name && (
            <ItemInfo
              title={'Тип Запчасти'}
              value={props.car_part_name}
              isSelected={isSelected}
            />
          )}

          {props.disc_brand_name && (
            <ItemInfo
              title={'Бренд Диска'}
              value={props.disc_brand_name}
              isSelected={isSelected}
            />
          )}

          {props.tire_brand_name && (
            <ItemInfo
              title={'Бренд Шины'}
              value={props.tire_brand_name}
              isSelected={isSelected}
            />
          )}
        </div>
      </button>
      {isSelected && (
        <button
          className="text-3xl text-red-600"
          type="button"
          onClick={() => onRemove(props.article)}
        >
          <span role="img">❌</span>
        </button>
      )}
    </li>
  );
};
