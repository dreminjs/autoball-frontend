import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import { FC } from 'react';
import { PostSeriesForm } from './post-series-form';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostSeriesModal: FC<IProps> = ({ isOpen, onClose }) => {
  return (
    <Modal 
      open={isOpen} 
      onClose={onClose}
      className="flex items-center justify-center"
    >
      <Box className="bg-white rounded-lg p-6 max-w-md w-full mx-4 shadow-xl">
        <PostSeriesForm />
      </Box>
    </Modal>
  );
};
