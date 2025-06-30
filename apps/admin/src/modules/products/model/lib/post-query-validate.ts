import { useNotificationActions } from '../../../notifications';
import { ProductFormData } from '../schemas/product.schema';

export const validateProductFields = (
  data: Partial<ProductFormData>,
  notification: ReturnType<typeof useNotificationActions>
): boolean => {
  const { addError } = notification;
  let isValid = true;

  if (data.productType === 'car') {
    const requiredTireFields = ['car_brand_id', 'car_series_id', 'car_part_id'];
    const missingFields = requiredTireFields.filter(
      (field) => !data[field as keyof typeof data]
    );
    if (missingFields.length > 0) {
      addError({
        message: `Обязательно нужно указать: ${missingFields
          .map((f) => {
            if (f === 'car_brand_id') return 'бренд запчасти';
            if (f === 'car_series_id') return 'серию бренда';
            if (f === 'car_part_id') return 'тип запчасти';
            return f;
          })
          .join(', ')}`,
      });
      isValid = false;
    }
  }

  if (data.productType === 'tire') {
    const requiredTireFields = [
      'tires_diametr',
      'tires_width',
      'tires_height',
      'tires_season',
    ];

    const missingFields = requiredTireFields.filter(
      (field) => !data[field as keyof typeof data]
    );

    if (missingFields.length > 0) {
      addError({
        message: `Для типа "Шины" обязательно нужно указать: ${missingFields
          .map((f) => {
            if (f === 'tires_diametr') return 'диаметр';
            if (f === 'tires_width') return 'ширину';
            if (f === 'tires_height') return 'высоту';
            if (f === 'tires_season') return 'сезон';
            return f;
          })
          .join(', ')}`,
      });
      isValid = false;
    }
  }

  if (data.productType === 'disc') {
    const requiredDiscFields = [
      'disc_diametr',
      'disc_width',
      'disc_ejection',
      'disc_holes',
    ];

    const missingFields = requiredDiscFields.filter(
      (field) => !data[field as keyof typeof data]
    );

    if (missingFields.length > 0) {
      addError({
        message: `Для типа "Диски" обязательно нужно указать: ${missingFields
          .map((f) => {
            if (f === 'disc_diametr') return 'диаметр';
            if (f === 'disc_width') return 'ширину';
            if (f === 'disc_ejection') return 'вылет';
            if (f === 'disc_holes') return 'количество отверстий';
            return f;
          })
          .join(', ')}`,
      });
      isValid = false;
    }
  }

  console.log(data)

//   const hasTireFields = Object.keys(data).some(
//     (key) => key.startsWith('tires_') && data[key as keyof typeof data]
//   );
//   const hasDiscFields = Object.keys(data).some(
//     (key) => key.startsWith('disc_') && data[key as keyof typeof data]
//   );

//   if (hasTireFields && hasDiscFields) {
//     addError({
//       message:
//         'Указаны параметры и для шин, и для дисков. Выберите один тип продукта.',
//     });
//     isValid = false;
//   }

  return isValid;
};
