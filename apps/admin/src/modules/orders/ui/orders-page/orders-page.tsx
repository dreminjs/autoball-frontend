import { OrdersList } from './list';
import { Toolbar } from './toolbar';
import { useOrder } from '../../model/hooks/use-orders';

export const OrdersPage = () => {
  const { data, ref, states, status, onChangeStatus } = useOrder();
  return (
    <div>
      <Toolbar
        statusFilter={status}
        onStatusChange={onChangeStatus}
      />
      <OrdersList states={states} data={data} libRef={ref} />
    </div>
  );
};
