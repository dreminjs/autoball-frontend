import { FC, Fragment } from 'react';
import { ICarBrand } from '@autoball-frontend/shared-types';
import { Actions } from '../../../model/types/actions';
import { IInfiteScrollResponse } from '../../../../../shared';
import { CarBrandItem } from './car-brand-item';

interface IProps {
  data?: IInfiteScrollResponse<ICarBrand>[];
  onChoose: (data: ICarBrand & Actions) => void;
  libRef: (node?: Element | null) => void
}

export const CarBrandList: FC<IProps> = ({ data, onChoose, libRef }) => {
  return (
    <ul className="h-[25vh] overflow-y-scroll">
      {data?.map((el, idx) => (
        <Fragment key={el.items[idx].id}>
          {el.items.map((item) => (
            <CarBrandItem key={item.id} {...item} onChoose={onChoose} />
          ))}
        </Fragment>
      ))}
      <li ref={libRef}/>
    </ul>
  );
};
