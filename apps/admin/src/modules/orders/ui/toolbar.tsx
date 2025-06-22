import { OrderStatus } from '@autoball-frontend/shared-types';
import { FC } from 'react';

interface IProps {
  statusFilter: OrderStatus;
  onStatusChange: (status: OrderStatus) => void;
}

export const Toolbar: FC<IProps> = ({statusFilter,onStatusChange}) => {
  return (
   <div className="mb-5 flex flex-col sm:flex-row sm:justify-between gap-4">
      <div className="flex items-center">
        <h2 className="text-xl font-bold mr-3">Заказы</h2>
        
        <div className="relative">
          <select
            value={statusFilter}
            onChange={(e) => onStatusChange(e.target.value as OrderStatus)}
            className="appearance-none bg-white border border-gray-300 rounded-lg py-2 pl-3 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="all">Все статусы</option>
            <option value="open">Открытые</option>
            <option value="closed">Закрытые</option>
          </select>
          
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* <div className="flex gap-2">
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
          + Новый заказ
        </button>
        <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors text-sm">
          Экспорт
        </button>
      </div> */}
    </div>
  );
};
