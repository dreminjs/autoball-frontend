import { InfiniteData } from '@tanstack/react-query';
import {
  ICarSeries,
  IInfiteScrollResponse,
} from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { useChooseSeriesId } from '@/modules/products/model/hooks/car/use-choose-series-id';
import { ApiOperationState } from '@/shared/types/api-operation-state.interface';
import { ListItem } from '../../../list-item';
import { List } from '@/components/list-items/list';

interface IProps {
  data?: InfiniteData<IInfiteScrollResponse<ICarSeries>>;
  ref: (node?: Element | null) => void;
  states: ApiOperationState
}

export const CarSeriesList: FC<IProps> = ({ states, data, ref }) => {
  const { choosedSeriesId, onChooseSeriesId } = useChooseSeriesId();
  return (
    <List
      className='h-[250px]'
      isPending={states.isPending}
      isError={states.isError}
      error={states.error?.response?.data.detail}
      empty={!data?.pages}
    >
      <ListItem
        currentItem={null}
        onChoose={() => onChooseSeriesId(null)}
        isSelected={choosedSeriesId === null}
      />
      {data?.pages.map((page, pageIndex) =>
        page.items.map((item) => (
          <ListItem
            isSelected={
              choosedSeriesId !== null ? choosedSeriesId === item.id : false
            }
            currentItem={item}
            onChoose={onChooseSeriesId}
            key={`${pageIndex}-${item.id}`}
            {...item}
          />
        ))
      )}
      <li ref={ref} />
    </List>
  );
};
