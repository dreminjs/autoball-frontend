import { useAtom } from 'jotai';
import {
  tireBrandAtom,
} from '../../../post-products-atoms-page';
import { IListItem } from '@autoball-frontend/shared-types';

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
