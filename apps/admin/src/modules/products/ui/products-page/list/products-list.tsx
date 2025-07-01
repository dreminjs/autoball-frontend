import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ProductItem } from './product-item';
import { IInfiteScrollResponse } from '../../../../../shared';

interface IProps {
  response?: IInfiteScrollResponse<IProduct>[];
  isLoading: boolean;
  errorMessage?: string;
  libRef: (node?: Element | null) => void;
}

export const ProductsList: FC<IProps> = ({
  response,
  isLoading,
  errorMessage,
  libRef,
}) => {
  return (
    <ul className="h-[70vh] overflow-y-scroll divide-y print:hidden">
      {isLoading && <li className="text-center">Загрузка...</li>}
      {errorMessage && (
        <li className="text-center text-rose-600">{errorMessage}</li>
      )}
      {response &&
        response.map(({ items }) =>
          items.map((item) => <ProductItem key={item.id} {...item} />)
        )}
      {response && <li ref={libRef} /> }
    </ul>
  );
};
