import { useAtom } from "jotai";
import { TDiameterOption } from "../../../types/dics.interface";
import { tiresDiameterAtom } from "../../../product-atoms-page";


export const useChooseTireDiameter = () => {
  const [diameterTire, setDiameterTire] = useAtom(tiresDiameterAtom);

  const handleChooseDiameter = (data: TDiameterOption | null) => setDiameterTire(data);

  return {
    onChooseDiameter: handleChooseDiameter,
    diameterTire,
  };
};
