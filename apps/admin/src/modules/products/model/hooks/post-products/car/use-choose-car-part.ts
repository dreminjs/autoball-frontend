import { useAtom } from 'jotai';
import { carPartAtom } from '../../../post-products-atoms-page';
import { IListItem } from '@autoball-frontend/shared-types';

export const useChooseCarPart = () => {
  const [choosedCarPart, setChoosedCarPartId] = useAtom(carPartAtom);

  const handleChooseCarPart = (data: IListItem | null) =>
    setChoosedCarPartId(data);

  const handleCancel = () => {
    setChoosedCarPartId(null);
  };

  return { choosedCarPart, onChooseCarPart: handleChooseCarPart, onCancel: handleCancel };
};
