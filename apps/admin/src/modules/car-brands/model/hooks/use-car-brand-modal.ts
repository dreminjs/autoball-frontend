import { useAtom } from "jotai";
import { isPostCarBrandModalVisibleAtom } from "../atoms";

export const useCarBrandModal = () => {
  const [isVisible, setIsVisible] = useAtom(isPostCarBrandModalVisibleAtom);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return {
    isModalVisible: isVisible,
    openModal,
    closeModal,
  };
};
