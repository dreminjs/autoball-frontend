import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { useChooseOrderProductInfo } from '../../../../orders/model/hooks/post-page/use-choose-order-product-info';
import { ItemInfo } from '../../item-info';

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
>;

type Props = TProduct;

export const ChoosedProduct: FC<Props> = (props) => {
  const { onRemove } =
    useChooseOrderProductInfo();

  const isSelected = true

  return (
    <li
      className={`w-full bg-blue-50 ring-2 ring-blue-500' flex justify-between items-center border-b mb-2 px-2 border-gray-200 last:border-b-0 transition-colors `}
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
  
        <button
          className="text-3xl text-red-600"
          type="button"
          onClick={() => onRemove(props.article)}
        >
          <span role="img">❌</span>
        </button>
    </li>
  );
};
