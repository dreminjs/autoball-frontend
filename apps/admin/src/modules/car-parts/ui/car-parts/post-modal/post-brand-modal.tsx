import { PostBrandForm } from './post-brand-form';
import { ModalLayout } from '../../../../../shared';
import { useCarPartModal } from '../../../model/hooks/use-car-parts-modal';

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
  const { closeModal, isModalVisible } = useCarPartModal();

  return (
    <ModalLayout isOpen={isModalVisible} onClose={closeModal}>
      <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6">
        Добавить новый тип запчасти
      </h2>
      <PostBrandForm />
      <button
        onClick={closeModal}
        className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 transition-colors"
        aria-label="Close"
      >
        {logo}
      </button>
    </ModalLayout>
  );
};
