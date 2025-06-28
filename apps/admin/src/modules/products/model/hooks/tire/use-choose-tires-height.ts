import { useAtom } from "jotai";
import { tiresHeightAtom } from "../../atoms-page";


export const useChooseTiresHeight = () => {
  const [tireHeight, setTiresHeight] = useAtom(tiresHeightAtom);

  const handleChooseHeight = (data: string | null) => setTiresHeight(data);

  return {
    onChooseHeight: handleChooseHeight,
    tireHeight,
  };
};