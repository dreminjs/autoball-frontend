import { IOrder } from '@autoball-frontend/shared-types';
import { useState } from 'react';
import { ListItem } from './list-item';

export const List = () => {
  const [orders, setOrders] = useState<IOrder[]>([
    {
      user_id: 'user-123',
      user_name: 'Иван Иванов',
      user_phone: '+7 (999) 123-45-67',
      product_id: 'prod-001',
      product_brand: 'Toyota',
      product_series: 'Camry',
      product_part: 'Тормозные колодки',
      created_at: '2023-05-15T14:30:00Z',
      description: 'Нужна срочная замена',
      status: 'open',
    },
  ]);

  return (
    <div>
        {orders.map(order => (
            <ListItem
              key={order.created_at} 
              {...order}
            />
          ))}
    </div>
  );
};
