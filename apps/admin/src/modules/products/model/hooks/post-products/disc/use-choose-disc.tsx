import { useAtom } from 'jotai';
import {
  discBrandAtom,
} from '../../../post-products-atoms-page';
import { IListItem } from '@autoball-frontend/shared-types';

export const useChooseDiscBrand = () => {
  const [choosedDiscBrand, setChoosedDiscBrand] = useAtom(discBrandAtom);

  const handleChooseDiscBrand = (data: IListItem | null) =>
    setChoosedDiscBrand(data);

  const handleCancel = () => setChoosedDiscBrand(null)

  return {
    onChooseDiscBrand: handleChooseDiscBrand,
    choosedDiscBrand,
    onCancel: handleCancel
  };
};
