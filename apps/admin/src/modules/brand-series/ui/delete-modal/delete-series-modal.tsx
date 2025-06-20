import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { useDeleteCarSeries } from '../../api/queries';
import { ICarSeries } from '@autoball-frontend/shared-types';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  series: Partial<ICarSeries>;
}

export const DeleteSeriesModal: FC<IProps> = ({ isOpen, onClose, series }) => {
  const { mutate } = useDeleteCarSeries(series.car_brand_id);
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex items-center justify-center p-5 z-50"
    >
      <div className="relative max-w-[500px] w-full overflow-y-auto bg-white rounded-lg shadow-xl z-50 p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">
          Вы уверены, что хотите удалить:{' '}
          <span className="text-red-600">{series.name}</span> ?
        </h2>

        <div className="flex justify-center space-x-4">
          <button
            className="px-6 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
            onClick={() => series.id && mutate(series.id)}
          >
            Да, удалить
          </button>

          <button
            className="px-6 py-2 bg-gray-200 text-gray-700 font-medium rounded-md hover:bg-gray-300 transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
            onClick={onClose}
          >
            Нет, отмена
          </button>
        </div>
      </div>
    </Modal>
  );
};
