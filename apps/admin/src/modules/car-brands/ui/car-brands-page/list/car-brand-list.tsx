import { FC } from 'react';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { Actions } from '../../../model/types/actions';
import { IInfiteScrollResponse } from '../../../../../shared';
import { CarBrandItem } from './car-brand-item';

interface IProps {
  data?: IInfiteScrollResponse<ICarBrand>[];
  onChoose: (data: ICarBrand & Actions) => void;
}

export const CarBrandList: FC<IProps> = ({ data, onChoose }) => {
  return (
    <ul className="">
      {data?.map((el) => (
        <>
          {el.items.map((item) => (
            <CarBrandItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </>
      ))}
    </ul>
  );
};
