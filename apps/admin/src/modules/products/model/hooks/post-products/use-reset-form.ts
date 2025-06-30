import { useEffect } from 'react';
import { useChooseDiscBrand } from './disc/use-choose-disc';
import { useChooseCarBrand } from './car/use-choose-car-brand';
import { useChooseSeries } from './car/use-choose-series';
import { useChooseCarPart } from './car/use-choose-car-part';
import { UseFormReset } from 'react-hook-form';
import { ProductFormData } from '../../schemas/product.schema';
import { useChooseTireBrand } from './tire/use-choose-tire';

export const useResetForm = (
  trigger: boolean,
  reset: UseFormReset<ProductFormData>
) => {
  const { onCancel: onCancelDiscBrand } = useChooseDiscBrand();
  const { onCancel: onCancelCarBrand } = useChooseCarBrand();
  const { onCancel: onCancelCarSeries } = useChooseSeries();
  const { onCancel: onCancelCarPart } = useChooseCarPart();
  const { onCancel: onCancelTireBrand } = useChooseTireBrand();

  useEffect(() => {
    if (trigger) {
      reset();
      onCancelDiscBrand();
      onCancelCarBrand();
      onCancelCarSeries();
      onCancelCarPart();
      onCancelTireBrand();
    }
  }, [trigger]);
};
