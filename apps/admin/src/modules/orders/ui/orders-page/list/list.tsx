import { ListItem } from './list-item';
import { List } from '../../../../../components';
import { ApiOperationState } from '../../../../../shared';
import { InfiniteData } from '@tanstack/react-query';
import { IInfiteScrollResponse, IOrder } from '@autoball-frontend/shared-types';
import { FC } from 'react';

interface IProps {
  states: ApiOperationState,
  data?: InfiniteData<IInfiteScrollResponse<IOrder>>
  libRef: (node?: Element | null) => void
}

export const OrdersList: FC<IProps> = ({states,data, libRef}) => {
 

  return (
    <List className='h-[70vh]' isPending={states.isPending} isError={states.isError} empty={data?.pages.length === 0} 
     error={states.error?.response?.data.detail}>
      {data?.pages.map((page) =>
        page.items.map((order) => (
          <ListItem key={order.created_at} {...order} />
        ))
      )}
      <li ref={libRef} />
    </List>
  );
};
