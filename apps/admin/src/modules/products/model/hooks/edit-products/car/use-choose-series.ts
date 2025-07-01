import { useAtom } from 'jotai';
import { IListItem } from '@autoball-frontend/shared-types';
import { carSeriesAtom } from '../../../edit-products-atoms-page';

export const useChooseSeries = () => {
  const [choosedSeries, setChoosedSeries] = useAtom(carSeriesAtom);

  const handleChooseSeries = (
    newValue: IListItem | null
  ) => setChoosedSeries(newValue);

  const handleCancel = () => setChoosedSeries(null);

  return {
    choosedSeries,
    onChooseSeries: handleChooseSeries,
    onCancel: handleCancel,
  };
};
