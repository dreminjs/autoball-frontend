import { OrderStatus } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { QUERY_KEYS } from '../../../../shared/constants';

interface IProps {
  statusFilter: OrderStatus;
  onStatusChange: (status: OrderStatus) => void;
}

export const Toolbar: FC<IProps> = ({ statusFilter, onStatusChange }) => {
  return (
    <div className="mb-5 flex flex-col sm:flex-row sm:justify-between gap-4">
      <div className="flex items-center gap-3">
        <h2 className="text-xl font-bold mr-3">Заказы</h2>
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value as OrderStatus)}
          className="appearance-none text-center bg-white border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option className='text-left' value="all">Все статусы</option>
          <option className='text-left' value="open">Открытые</option>
          <option className='text-left' value="closed">Закрытые</option>
        </select>

          <Link to={`${QUERY_KEYS.post}`} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            + Новый заказ
          </Link>
      </div>
    </div>
  );
};
