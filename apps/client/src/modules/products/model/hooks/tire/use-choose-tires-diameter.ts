import { useAtom } from "jotai";
import { tiresDiameterAtom } from "../../product-atoms-page";
import { TDiameterOption } from "../../types/dics.interface";


export const useChooseTireDiameter = () => {
  const [diameterTire, setDiameterTire] = useAtom(tiresDiameterAtom);

  const handleChooseDiameter = (data: TDiameterOption | null) => setDiameterTire(data);

  return {
    onChooseDiameter: handleChooseDiameter,
    diameterTire,
  };
};
