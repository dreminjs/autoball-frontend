import { useAtom } from 'jotai';
import { carBrandAtom } from '../../../post-products-atoms-page';
import { IListItem } from '@autoball-frontend/shared-types';

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
