import { ICarPart } from "@autoball-frontend/shared-types";
import { useAtom } from "jotai";
import { choosedCarPartAtom } from "../atoms";
import { Actions } from "../../../../shared";


export const useChooseCarPart = () => {
  const [choosedCarPart, setChoosedCarPart] = useAtom(choosedCarPartAtom);

  const handleChooseCarPart = (
    newValue: (ICarPart & Actions) | null
  ) => setChoosedCarPart(newValue);

  const handleCancel = () => setChoosedCarPart(null)

  return { choosedCarPart, onChooseCarPart: handleChooseCarPart, onCancel: handleCancel };
};
