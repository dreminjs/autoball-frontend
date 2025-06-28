import { useAtom } from "jotai";
import { tiresModelAtom } from "../../atoms-page";




export const useChooseTiresModel = () => {
  const [tireModel, setTireModel] = useAtom(tiresModelAtom);

  const handleChooseModel = (data: string | null) => setTireModel(data);

  return {
    onChooseModel: handleChooseModel,
    tireModel,
  };
};
