import { useAtom } from 'jotai';
import { seriesIdAtom } from '../..';

export const useChooseSeriesId = () => {
  const [choosedSeriesId, setChoosedSeriesId] = useAtom(seriesIdAtom);

  const handleChooseSeriesId = (
    newValue: string | null
  ) => setChoosedSeriesId(newValue);

  const handleCancel = () => setChoosedSeriesId(null);

  return {
    choosedSeriesId,
    onChooseSeriesId: handleChooseSeriesId,
    onCancel: handleCancel,
  };
};
