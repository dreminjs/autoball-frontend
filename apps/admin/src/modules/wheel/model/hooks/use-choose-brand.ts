import { IWheelComponentBrand } from "@autoball-frontend/shared-types";
import { useState } from "react";


export const useChooseBrand = () => {
  const [choosedBrand, setChoosedBrand] = useState<
    ((IWheelComponentBrand) & { type: 'delete' | 'edit' }) | null
  >(null);

  const handleChooseBrand = (
    newValue: (IWheelComponentBrand & { type: 'delete' | 'edit' }) | null
  ) => setChoosedBrand(newValue);

  const handleCancel = () => setChoosedBrand(null)

  return { choosedBrand, onChooseBrand: handleChooseBrand, onCancel: handleCancel };
};
