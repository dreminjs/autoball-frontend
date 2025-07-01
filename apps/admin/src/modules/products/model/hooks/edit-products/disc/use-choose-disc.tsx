import { useAtom } from 'jotai';
import { IListItem } from '@autoball-frontend/shared-types';
import { discBrandAtom } from '../../../edit-products-atoms-page';

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
