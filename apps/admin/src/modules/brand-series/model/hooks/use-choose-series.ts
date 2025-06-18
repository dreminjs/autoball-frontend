import { ICarSeries } from '@autoball-frontend/shared-types';
import { useState } from 'react';

export const useChooseSeries = () => {
  const [choosedSeries, setChoosedSeries] = useState<
    (ICarSeries & { type: 'delete' | 'edit' }) | null
  >(null);

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
