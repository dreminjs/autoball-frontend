import Modal from '@mui/material/Modal';
import { FC } from 'react';
import { PostBrandForm } from './post-brand-form';
import { useAtom } from 'jotai';
import { isPostWheelComponentBrandModalVisibleAtom } from '../../../model/atoms';
import { IWheelComponentBrand } from '@autoball-frontend/shared-types';

const logo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);



export const PostBrandModal = () => {

  const [isPostWheelComponentBrandModalVisible, setIsPostWheelComponentBrandModalVisible] = useAtom(isPostWheelComponentBrandModalVisibleAtom)

  const handleClose = () => setIsPostWheelComponentBrandModalVisible(false)

  return (
    <Modal
      open={isPostWheelComponentBrandModalVisible}
      onClose={handleClose}
      className="flex items-center justify-center p-5 z-50"
    >
      <div className="relative max-w-[500px] w-full overflow-y-auto bg-white rounded-lg shadow-xl z-50 p-6">
        <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
          Добавить новый бренд
        </h2>
        <PostBrandForm
          onClose={handleClose}
        />
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="Close"
        >
          {logo}
        </button>
      </div>
    </Modal>
  );
};
