import { ICarPart } from '@autoball-frontend/shared-types';
import { useAtom } from 'jotai';
import { choosedWheelComponentBrandAtom } from '../atoms';

export const useChoosedWheelComponentBrand = () => {
  const [choosedWheelComponentBrand, setChoosedWheelComponentBrand] = useAtom(
    choosedWheelComponentBrandAtom
  );

  const handleChooseWheelComponentBrand = (
    newValue: (ICarPart & { type: 'delete' | 'edit' }) | null
  ) => setChoosedWheelComponentBrand(newValue);

  const handleCancel = () => setChoosedWheelComponentBrand(null);

  return {
    choosedWheelComponentBrand,
    onChooseWheelComponentBrand: handleChooseWheelComponentBrand,
    onCancel: handleCancel,
  };
};
