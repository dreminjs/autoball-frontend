import { useAtom } from 'jotai';
import { carSeriesAtom } from '../../../post-products-atoms-page';
import { IListItem } from '@autoball-frontend/shared-types';

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
