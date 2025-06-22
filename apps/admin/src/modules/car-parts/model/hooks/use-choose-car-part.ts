import { ICarPart } from "@autoball-frontend/shared-types";
import { useAtom } from "jotai";
import { choosedCarPartAtom } from "../atoms";


export const useChooseCarPart = () => {
  const [choosedCarPart, setChoosedCarPart] = useAtom(choosedCarPartAtom);

  const handleChooseCarPart = (
    newValue: (ICarPart & { type: 'delete' | 'edit' }) | null
  ) => setChoosedCarPart(newValue);

  const handleCancel = () => setChoosedCarPart(null)

  return { choosedCarPart, onChooseCarPart: handleChooseCarPart, onCancel: handleCancel };
};
