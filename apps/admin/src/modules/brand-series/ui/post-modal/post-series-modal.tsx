import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { FC } from 'react';
import { Form } from './form';
import { useCarSeriesModal } from '../../model/hooks/use-car-series-modal';

export const PostSeriesModal: FC = () => {
  const { closeModal, isModalVisible } = useCarSeriesModal();

  return (
    <Modal
      open={isModalVisible}
      onClose={closeModal}
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Добавить серию</h2>
        <Form />
      </Box>
    </Modal>
  );
};
