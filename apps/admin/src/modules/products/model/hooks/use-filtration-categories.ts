import { useAtomValue } from 'jotai';
import {
  carBrandIdAtom,
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

  const carBrandId = useAtomValue(carBrandIdAtom);

  const seriesId = useAtomValue(seriesIdAtom);

  const carPartId = useAtomValue(carPartIdAtom);

  return {
    condition,
    countItems,
    isPrintedStatus,
    carBrandId,
    seriesId,
    carPartId,
  };
};
