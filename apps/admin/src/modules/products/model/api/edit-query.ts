

import { useChooseCarPart } from '../hooks/edit-products/car/use-choose-car-part';
import { useChooseSeries } from '../hooks/edit-products/car/use-choose-series';
import { useChooseCarBrand } from '../hooks/edit-products/car/use-choose-car-brand';
import { useMutation } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import { useNotificationActions } from '../../../notifications';
import { validateProductFields } from '../lib/post-query-validate';
import { EditProductFormData } from '../schemas/product.schema';
import { editOne } from './services';


export const useEditProduct = (id?: string) => {
  const { addError, addInfo, addSuccess, remove } = useNotificationActions();

  const { brand } = useChooseCarBrand();
  const { choosedCarPart } = useChooseCarPart();
  const { choosedSeries } = useChooseSeries();

  const { mutate, ...props } = useMutation({
    mutationKey: [SERVICE_URLS.product],
    mutationFn: (data: EditProductFormData) => editOne(data, id),
    onSuccess: () => {
      remove('info');
      addSuccess();
    },
    onError: () => {
      remove('info');
      addError();
    },
  });

  const handleMutate = (data: EditProductFormData) => {
    if (
      validateProductFields(
        {
          ...data,
          car_brand_id: brand?.id,
          car_series_id: choosedSeries?.id,
          car_part_id: choosedCarPart?.id,
        },
        { addError, addInfo, addSuccess, remove }
      )
    )
      addInfo();
    mutate({
      ...data,
      car_brand_id: brand?.id,
      car_series_id: choosedSeries?.id,
      car_part_id: choosedCarPart?.id,
    });
  };
  return { mutate: handleMutate, ...props };
};

