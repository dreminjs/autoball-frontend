import { useAtom } from 'jotai';
import { IListItem } from '@autoball-frontend/shared-types';
import { carPartAtom } from '../../../edit-products-atoms-page';

export const useChooseCarPart = () => {
  const [choosedCarPart, setChoosedCarPartId] = useAtom(carPartAtom);

  const handleChooseCarPart = (data: IListItem | null) =>
    setChoosedCarPartId(data);

  const handleCancel = () => {
    setChoosedCarPartId(null);
  };

  return { choosedCarPart, onChooseCarPart: handleChooseCarPart, onCancel: handleCancel };
};
