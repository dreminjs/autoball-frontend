import { useAtom } from "jotai";
import { tiresIndexAtom } from "../../../product-atoms-page";


export const useChooseTiresIndex = () => {
  const [tiresIndex, setTiresIndex] = useAtom(tiresIndexAtom);

  const handleChooseIndex = (data: string | null) => setTiresIndex(data);

  return {
    onChooseIndex: handleChooseIndex,
    tiresIndex,
  };
};