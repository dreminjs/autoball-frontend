import { TTiresCar } from "@/shared/types";
import { useAtom } from "jotai";
import { tiresCarTypeAtom } from "../../product-atoms-page";

export const useChooseTiresCarType = () => {
  const [tiresCarType, setTiresCarType] = useAtom(tiresCarTypeAtom);

  const handleChooseCarType = (data: TTiresCar | null) => setTiresCarType(data);

  return {
    onChooseCarType: handleChooseCarType,
    tiresCarType,
  };
};
