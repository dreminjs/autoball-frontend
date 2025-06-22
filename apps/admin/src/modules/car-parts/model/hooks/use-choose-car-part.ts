import { ICarPart } from "@autoball-frontend/shared-types";
import { useState } from "react";


export const useChooseCarPart = () => {
  const [choosedCarPart, setChoosedCarPart] = useState<
    ((ICarPart) & { type: 'delete' | 'edit' }) | null
  >(null);

  const handleChooseCarPart = (
    newValue: (ICarPart & { type: 'delete' | 'edit' }) | null
  ) => setChoosedCarPart(newValue);

  const handleCancel = () => setChoosedCarPart(null)

  return { choosedCarPart, onChooseCarPart: handleChooseCarPart, onCancel: handleCancel };
};
