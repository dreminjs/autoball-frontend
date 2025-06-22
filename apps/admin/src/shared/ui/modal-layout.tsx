import Modal from '@mui/material/Modal';
import { FC, ReactNode } from 'react';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode
}

export const ModalLayout: FC<IProps> = ({ onClose, isOpen, children }) => {
  return (
    <Modal
      open={isOpen}
      onClose={onClose}
      className="flex items-center justify-center p-5 z-2"
    >
      <div className="relative max-w-[500px] w-full overflow-y-auto bg-white rounded-lg shadow-xl z-50 p-6">
        {children}
      </div>
    </Modal>
  );
};
