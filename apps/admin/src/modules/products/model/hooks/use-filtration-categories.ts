import { useAtomValue } from 'jotai';
import {
  brandIdAtom,
  carPartIdAtom,
  conditionAtom,
  countItemsAtom,
  isPrintedStatusAtom,
  seriesIdAtom,
} from '../..';

export const useFilterCategories = () => {
  const condition = useAtomValue(conditionAtom);

  const countItems = useAtomValue(countItemsAtom);

  const isPrintedStatus = useAtomValue(isPrintedStatusAtom);

  const brandId = useAtomValue(brandIdAtom);

  const seriesId = useAtomValue(seriesIdAtom);

  const carPartId = useAtomValue(carPartIdAtom);

  return {
    condition,
    countItems,
    isPrintedStatus,
    brandId,
    seriesId,
    carPartId,
  };
};
