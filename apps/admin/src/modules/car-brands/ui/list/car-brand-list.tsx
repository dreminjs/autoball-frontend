import { FC } from 'react';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { CarBrandItem } from './car-brand-item';
import { Actions } from '../../model/types/actions';

interface IProps {
  items?: ICarBrand[];
  onChoose: (data: ICarBrand & Actions) => void;
}

export const CarBrandList: FC<IProps> = ({ items,onChoose }) => {
  return (
    <ul>
      {items?.map((item) => (
        <CarBrandItem
          onChoose={(currentItem) => onChoose(currentItem)}
          key={item.id}
          id={item.id}
          name={item.name}
          picture={item.picture}
        />
      ))}
    </ul>
  );
};
