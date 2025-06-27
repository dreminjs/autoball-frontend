import { ICarBrand, IInfiteScrollResponse } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { ListItem } from './list-item';
import { InfiniteData } from '@tanstack/react-query';
import { List } from '../../../../../components';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarBrand>>;
  choosedItemId: string | null
  onChoose: (data: string | null) => void
  ref: (node?: Element | null) => void
  states: {
    error?: string
    isPending: boolean
    isSuccess: boolean
    isError: boolean
  }
}

export const BrandList: FC<IProps> = ({ data, choosedItemId, onChoose, ref , states }) => {
  return (
    <List isPending={states.isPending} isError={states.isError} error={states.error} empty={!data?.pages}>
      <ListItem choosedBrandId={null} currentBrand={null} onChoose={(data) => onChoose(null)} />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem choosedBrandId={choosedItemId} currentBrand={item} onChoose={onChoose} key={`${pageIndex}-${item.id}`} {...item} />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
