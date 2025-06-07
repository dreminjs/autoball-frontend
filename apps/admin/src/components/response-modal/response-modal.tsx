import Modal from '@mui/material/Modal';
import { FC, useEffect, useState } from 'react';

interface IProps {
  isOpen: boolean;
  message: {
    pending?: string;
    error?: string;
    success?: string;
  };
  states: {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
  };
}

export const ResponseModal: FC<IProps> = ({ isOpen, message, states }) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
      const timer = setTimeout(() => {
        setShowModal(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, states.isError, states.isPending, states.isSuccess]);

  const getMessage = () => {
    if (states.isPending) return message.pending;
    if (states.isSuccess) return message.success;
    if (states.isError) return message.error;
    return '';
  };

  const getModalStyle = () => {
    if (states.isPending) return 'bg-blue-100 text-blue-800';
    if (states.isSuccess) return 'bg-green-100 text-green-800';
    if (states.isError) return 'bg-red-100 text-red-800';
    return '';
  };

  return (
    <Modal
      className="fixed inset-0 flex items-center justify-center"
      open={showModal}
      onClose={() => setShowModal(false)}
    >
      <div className={`p-4 rounded-md w-[300px] ${getModalStyle()}`}>
        <p>{getMessage()}</p>
      </div>
    </Modal>
  );
};
