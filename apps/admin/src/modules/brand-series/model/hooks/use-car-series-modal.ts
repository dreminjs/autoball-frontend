import { useAtom } from "jotai";
import { isPostBrandSeriesModalVisibleAtom } from "../atoms";

export const useCarSeriesModal = () => {
  const [isVisible, setIsVisible] = useAtom(isPostBrandSeriesModalVisibleAtom);

  const openModal = () => setIsVisible(true);
  const closeModal = () => setIsVisible(false);

  return {
    isModalVisible: isVisible,
    openModal,
    closeModal,
  };
};
