import { useAtom } from "jotai";
import { tiresHeightAtom } from "../../../product-atoms-page";


export const useChooseTiresHeight = () => {
  const [tireHeight, setTiresHeight] = useAtom(tiresHeightAtom);

  const handleChooseHeight = (data: number | null) => setTiresHeight(data);

  return {
    onChooseHeight: handleChooseHeight,
    tireHeight,
  };
};