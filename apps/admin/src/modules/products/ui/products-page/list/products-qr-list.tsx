import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { CarPartsQrItem } from './products-qr-item';
import { IInfiteScrollResponse } from '../../../../../shared';

interface IProps {
  response?: IInfiteScrollResponse<IProduct>[];
}

export const CarPartsQrList: FC<IProps> = ({ response }) => {

  return (
    <ul className="hidden print:block print:h-screen">
      {response &&
        response.map(({ items }) =>
          items.map((item) => <CarPartsQrItem key={item.id} {...item} />)
        )}
        
    </ul>
  );
};
