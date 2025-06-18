import { ICarBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ListItem } from './list-item';
import { InfiniteData } from '@tanstack/react-query';
import { IInfiteScrollResponse } from '../../../../../../../shared';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarBrand>>;
}

export const List: FC<IProps> = ({ data }) => {
  return (
    <ul className="mt-3 max-h-60 overflow-y-auto">
      <ListItem id={null} name="Не важно" />

      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem key={`${pageIndex}-${item.id}`} {...item} />
        ))
      )}
    </ul>
  );
};
