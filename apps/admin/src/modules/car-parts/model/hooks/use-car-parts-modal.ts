import { useAtom } from 'jotai';
import { isPostCarPartsModalVisibleAtom } from '../atoms';

export const useCarPartModal = () => {
  const [isVisible, setIsVisible] = useAtom(isPostCarPartsModalVisibleAtom);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return {
    isModalVisible: isVisible,
    openModal,
    closeModal,
  };
};
