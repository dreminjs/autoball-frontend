import { ICarBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { BrandItem } from './brand-item';

interface IProps {
  items?: ICarBrand[] 
}

export const BrandList: FC<IProps> = ({ items }) => {
  return (
    <ul>
      {items && items.map((item) => (
        <BrandItem id={item.id} name={item.name} />
      ))}
    </ul>
  );
};
