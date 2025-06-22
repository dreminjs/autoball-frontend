import { ICarBrand } from '@autoball-frontend/shared-types';
import { useAtom } from 'jotai';
import { choosedBrandAtom } from '../atoms';

export const useChooseBrand = () => {
  const [choosedBrand, setChoosedBrand] = useAtom(choosedBrandAtom);

  const handleChooseBrand = (
    newValue: (ICarBrand & { type: 'delete' | 'edit' }) | null
  ) => setChoosedBrand(newValue);

  const handleCancel = () => setChoosedBrand(null)

  return { choosedBrand, onChooseBrand: handleChooseBrand, onCancel: handleCancel };
};
