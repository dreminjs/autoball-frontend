import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { FC } from 'react';
import { Form } from './form';
import { useAtom } from 'jotai';
import { isPostBrandSeriesModalVisibleAtom } from '../../model/atoms';

export const PostSeriesModal: FC = () => {
  const [isPostBrandSeriesModalVisible, setIsPostBrandSeriesModalVisible] =
    useAtom(isPostBrandSeriesModalVisibleAtom);

  const handleClose = () => setIsPostBrandSeriesModalVisible(false);

  return (
    <Modal
      open={isPostBrandSeriesModalVisible}
      onClose={handleClose}
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <h2 className="text-xl font-bold mb-4">Добавить серию</h2>
        <Form onClose={handleClose} />
      </Box>
    </Modal>
  );
};
