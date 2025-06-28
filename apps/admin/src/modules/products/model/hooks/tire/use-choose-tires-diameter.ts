import { useAtom } from "jotai";
import { tireDiameterAtom } from "../../atoms-page";
import { TDiameterOption } from "../../types/dics.interface";


export const useChooseTireDiameter = () => {
  const [diameterTire, setDiameterTire] = useAtom(tireDiameterAtom);

  const handleChooseDiameter = (data: TDiameterOption | null) => setDiameterTire(data);

  return {
    onChooseDiameter: handleChooseDiameter,
    diameterTire,
  };
};
