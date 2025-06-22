import { useAtom } from "jotai";
import { isPostWheelComponentBrandModalVisibleAtom } from "../atoms";

export const useWheelComponentBrandModal = () => {
  const [isVisible, setIsVisible] = useAtom(isPostWheelComponentBrandModalVisibleAtom);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return {
    isModalVisible: isVisible,
    openModal,
    closeModal,
  };
};
