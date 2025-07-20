import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { PostOrderForm } from './post-order-form';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PostOrderModal: FC<IProps> = ({ onClose, isOpen }) => {
  return (
    <Modal
      {...{ onClose }}
      open={isOpen}
      className="fixed inset-0 flex items-center justify-center z-5"
    >
      <div className='bg-white basis-[460px] p-[35px] rounded'>
        <h3 className='mb-3 text-2xl'>Оформление заказа</h3>
        <PostOrderForm />
      </div>
    </Modal>
  );
};
