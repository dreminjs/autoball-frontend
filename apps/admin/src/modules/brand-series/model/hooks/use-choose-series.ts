import { ICarSeries } from '@autoball-frontend/shared-types';
import { useAtom } from 'jotai';
import { choosedCarSeriesAtom } from '../atoms';

export const useChooseSeries = () => {
  const [choosedSeries, setChoosedSeries] = useAtom(choosedCarSeriesAtom);

  const handleChooseBrand = (
    newValue: (ICarSeries & { type: 'delete' | 'edit' }) | null
  ) => setChoosedSeries(newValue);

  const handleCancel = () => setChoosedSeries(null);

  return {
    choosedSeries,
    onChooseBrand: handleChooseBrand,
    onCancel: handleCancel,
  };
};
