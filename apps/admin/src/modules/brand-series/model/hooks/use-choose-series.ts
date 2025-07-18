import { ICarSeries } from '@autoball-frontend/shared-types';
import { useAtom } from 'jotai';
import { choosedCarSeriesAtom } from '../atoms';
import { Actions, } from '../../../../shared';

export const useChooseSeries = () => {
  const [choosedSeries, setChoosedSeries] = useAtom(choosedCarSeriesAtom);

  const handleChooseSeries = (
    newValue: (ICarSeries & Actions) | null
  ) => setChoosedSeries(newValue);

  const handleCancel = () => setChoosedSeries(null);

  return {
    choosedSeries,
    onChooseSeries: handleChooseSeries,
    onCancel: handleCancel,
  };
};
