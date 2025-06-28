import { useAtom } from "jotai";
import { tiresCarTypeAtom } from "../../atoms-page";
import { TTiresCar } from "../../../../../shared/types";




export const useChooseTiresCarType = () => {
  const [tiresCarType, setTiresCarType] = useAtom(tiresCarTypeAtom);

  const handleChooseCarType = (data: TTiresCar | null) => setTiresCarType(data);

  return {
    onChooseCarType: handleChooseCarType,
    tiresCarType,
  };
};
