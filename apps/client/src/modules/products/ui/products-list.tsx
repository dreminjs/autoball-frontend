import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ProductItem } from './product-item/product-item';

interface IProps {
  items?: IProduct[];
}

export const ProductsList: FC<IProps> = ({ items }) => {
  return (
    <>
      <ul className="">
        {items?.map((el) => (
          <ProductItem key={el.id} {...el} />
        ))}
      </ul>
    </>
  );
};
