import { ICarSeries } from '@autoball-frontend/shared-types';
import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { Form } from './form';
import Box from '@mui/material/Box';

interface IProps {
  series: Partial<ICarSeries>;
  isOpen: boolean;
  onClose: () => void;
}

export const EditSeriesModal: FC<IProps> = ({ series, isOpen, onClose }) => {
  return (
    <Modal
      onClose={onClose}
      open={isOpen}
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Редактировать серию</h2>
        <Form series={series} onClose={onClose} />
      </Box>
    </Modal>
  );
};
