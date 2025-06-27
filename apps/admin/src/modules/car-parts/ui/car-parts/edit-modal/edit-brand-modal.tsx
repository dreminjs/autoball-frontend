import { FC } from 'react';
import { EditBrandForm } from './edit-brand-form';
import { ICarPart } from '@autoball-frontend/shared-types';
import { ModalLayout } from '../../../../../shared';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  brand: Partial<ICarPart>;
}

const icon = (
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

export const EditCarPartModal: FC<IProps> = ({ isOpen, onClose, brand }) => {
  return (
    <ModalLayout isOpen={isOpen} onClose={onClose}>
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Редактировать новый тип запачасти
      </h2>
      <EditBrandForm brand={brand} onClose={onClose} />
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close"
      >
        {icon}
      </button>
    </ModalLayout>
  );
};
