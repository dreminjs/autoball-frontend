import { useAtom } from 'jotai';
import { IListItem } from '@autoball-frontend/shared-types';
import { carBrandAtom } from '../../../edit-products-atoms-page';

export const useChooseCarBrand = () => {
  const [brand, setBrand] = useAtom(carBrandAtom);

  const handleChooseBrand = (data: IListItem | null) => setBrand(data);

  const handleCancel = () => setBrand(null)

  return {
    onChooseBrand: handleChooseBrand,
    brand,
    onCancel: handleCancel
  };
};
