import { useAtom } from 'jotai';
import { IListItem } from '@autoball-frontend/shared-types';
import { tireBrandAtom } from '../../../edit-products-atoms-page';

export const useChooseTireBrand = () => {
  const [choosedTireBrand, setChoosedTireBrand] = useAtom(tireBrandAtom);

  const handleChooseTireBrand = (data: IListItem | null) =>
    setChoosedTireBrand(data);

  const handleCancel = () => setChoosedTireBrand(null)

  return {
    onChooseTireBrand: handleChooseTireBrand,
    choosedTireBrand,
    onCancel: handleCancel
  };
};
