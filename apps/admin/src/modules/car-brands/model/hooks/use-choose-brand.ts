import { ICarBrand } from '@autoball-frontend/shared-types';
import { useState } from 'react';

export const useChooseBrand = () => {
  const [choosedBrand, setChoosedBrand] = useState<
    ((ICarBrand | null) & { type: 'delete' | 'edit' }) | null
  >(null);

  const handleChooseBrand = (
    newValue: (ICarBrand & { type: 'delete' | 'edit' }) | null
  ) => setChoosedBrand(newValue);

  return { choosedBrand, onChooseBrand: handleChooseBrand };
};
