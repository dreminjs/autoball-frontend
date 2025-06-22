import { OrderStatus } from '@autoball-frontend/shared-types';
import { List } from './list';
import { Toolbar } from './toolbar';

export const OrdersPage = () => {
  return (
    <div>
      <Toolbar statusFilter={'open'} onStatusChange={function (status: OrderStatus): void {
        throw new Error('Function not implemented.');
      } } />
      <List />
    </div>
  );
};
