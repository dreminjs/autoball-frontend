import { ICarPart } from '@autoball-frontend/shared-types';
import { useAtom } from 'jotai';
import { choosedWheelComponentBrandAtom } from '../atoms';
import { Actions } from '../../../../shared';

export const useChoosedWheelComponentBrand = () => {
  const [choosedWheelComponentBrand, setChoosedWheelComponentBrand] = useAtom(
    choosedWheelComponentBrandAtom
  );

  const handleChooseWheelComponentBrand = (
    newValue: (ICarPart & Actions) | null
  ) => setChoosedWheelComponentBrand(newValue);

  const handleCancel = () => setChoosedWheelComponentBrand(null);

  return {
    choosedWheelComponentBrand,
    onChooseWheelComponentBrand: handleChooseWheelComponentBrand,
    onCancel: handleCancel,
  };
};
