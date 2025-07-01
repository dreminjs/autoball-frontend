import { FC, Fragment } from 'react';
import { List } from '../../../../../components';
import { ApiOperationState } from '../../../../../shared';
import { IInfiteScrollResponse, IUser } from '@autoball-frontend/shared-types';
import { InfiniteData } from '@tanstack/react-query';
import { UserItem } from './list-item';

interface IProps {
  ref: (node?: Element | null) => void
  states: ApiOperationState,
  data?: InfiniteData<IInfiteScrollResponse<IUser>>
}

export const UserList: FC<IProps> = ({ ref, data, states }) => {
  return (
    <List
      className='h-[70vh] overflow-y-scroll'
      isPending={states.isPending}
      isError={states.isError}
      empty={!data?.pages.length}
    >
      {
        data?.pages.map((page, index) => (
          <Fragment key={index}>{
            page?.items.map((user) => (
              <UserItem {...user} />
            ))
          }</Fragment>
        ))
      }
      <li ref={ref}/>
    </List>
  );
};
