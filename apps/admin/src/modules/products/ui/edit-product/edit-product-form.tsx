import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../../components/buttons';
import { productSchema } from '../../model/schemas/product.schema';
import { ProductFormData } from '../../model/types/product.interface';
import {
  bodyTypeOptions,
  gearboxOptions,
  fuelOptions,
  currenciesOptions,
} from '../../model/data';
import { SelectInput } from './form/select-input';
import { TextInput } from './form/text-input';
import { DndProvider } from 'react-dnd';
import { PhotoUploader } from './form/photo-uploader/photo-uploader';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RadioGroup } from './form/radio-group';
import { DiscFields } from './form/disc-fields';
import { AddCarPartCharacteristicsModal } from './form/characteristics/add-car-part-characteristics/add-car-part-characteristics-modal';
import { useCarPartCharacteristicsModal } from '../../model/hooks/products/use-car-part-characteristics-modal';
import { ChoosedCharacteristics } from './form/characteristics/add-car-part-characteristics/choosed-characteristics';
import { FC, useEffect, useRef } from 'react';
import { useResetForm } from '../../model/hooks/post-products/use-reset-form';
import { TierFields } from '../post-product/form/tier-fields';

import { IProduct } from '@autoball-frontend/shared-types';
import { useSetDefualtValues } from '../../model/hooks/edit-products/use-set-defualt-values';
import { useEditProduct } from '../../model/api/edit-query';
import { useNavigation, useParams } from 'react-router-dom';

type Props = Partial<IProduct> & { productType: 'car' | 'tire' | 'disc' };

export const EditProductForm: FC<Props> = (props) => {
  const methods = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      condition: 'used',
      gearbox: props.gearbox,
      fuel: props.fuel,
      type_of_body: props.type_of_body,
      count: props.count,
      price: props.price,
      volume: props.volume,
      productType: props.productType,
      discount: 0,
      currency: props.currency,
      OEM: props.OEM,
      VIN: props.VIN,
    },
  });

  const {id} = useParams<{id: string}>()

  const removedPhotos = useRef<string[]>([]);

  const { isOpen, onToggleModal } = useCarPartCharacteristicsModal();

  const { mutate, isSuccess } = useEditProduct(id);

  const productType = methods.watch('productType');

  const onSubmit = methods.handleSubmit((data: ProductFormData) => {
    mutate({...data, removedPhotos: removedPhotos.current});
  });

  useResetForm(isSuccess, methods.reset);

  const { onSetValue } = useSetDefualtValues();

  useEffect(() => {
    if (props) {
      methods.setValue('condition', 'used');
      methods.setValue('gearbox', props.gearbox);
      methods.setValue('fuel', props.fuel);
      methods.setValue('type_of_body', props.type_of_body);
      methods.setValue('count', props?.count || 1);
      methods.setValue('price', props?.price || 0);
      methods.setValue('volume', props.volume);
      methods.setValue('productType', props.productType);
      methods.setValue('discount', 0);
      methods.setValue('currency', props.currency || 'USD');
      methods.setValue('OEM', props.OEM || '');
      methods.setValue('VIN', props.VIN);
      methods.setValue('year', props.year || 2000);

      onSetValue({
        ...(props.car_brand_id && props.car_brand_name
          ? { carBrand: { name: props.car_brand_name, id: props.car_brand_id } }
          : { carBrand: null }),
        ...(props.car_series_id && props.car_series_name
          ? { series: { name: props.car_series_name, id: props.car_series_id } }
          : { series: null }),
        ...(props.car_part_id && props.car_part_name
          ? { carPart: { name: props.car_part_name, id: props.car_part_id } }
          : { carPart: null }),

        tire:
          props.tire_brand_name && props.tire_id
            ? {
                id: props.tire_id,
                name: props.tire_brand_name,
              }
            : null,
        disc:
          props.disc_brand_name && props.disc_id
            ? {
                id: props.disc_id,
                name: props.disc_brand_name,
              }
            : null,
      });
    }
  }, [props]);

  useEffect(() => {
    if (productType !== 'disc') {
      const discFields = [
        'disc_diametr',
        'disc_width',
        'disc_ejection',
        'disc_dia',
        'disc_holes',
        'disc_pcd',
        'disc_brand_id',
        'disc_model',
      ];

      discFields.forEach((field) => {
        methods.resetField(field as any);
      });

      const discErrors = Object.keys(methods.formState.errors).filter((key) =>
        key.startsWith('disc_')
      );

      discErrors.forEach((errorKey) => {
        methods.clearErrors(errorKey as any);
      });
    }
    if (productType !== 'tire') {
      const tiresFields = [
        'tires_diametr',
        'tires_width',
        'tires_height',
        'tires_index',
        'tires_car_type',
        'tire_brand_id',
        'tires_model',
        'tires_season',
        'tires_residue',
      ];

      tiresFields.forEach((field) => {
        methods.resetField(field as any);
      });

      const tiresErrors = Object.keys(methods.formState.errors).filter(
        (key) => key.startsWith('tires_') || key === 'tire_brand_id'
      );

      tiresErrors.forEach((errorKey) => {
        methods.clearErrors(errorKey as any);
      });
    }
  }, [productType, methods]);

  useEffect(() => {
    console.log(methods.formState.errors)
  },[methods.formState.errors])

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="space-y-4 p-4">
          <div className="flex gap-2">
            <div className="max-w-[900px]">
              <h2 className="text-2xl font-bold">Редактирование продукта</h2>
              <RadioGroup
                label="Тип продукта"
                name="productType"
                register={methods.register}
                options={[
                  { value: 'tire', label: 'Шины' },
                  { value: 'disc', label: 'Диски' },
                  { value: 'car', label: 'Другие детали' },
                ]}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
                <TextInput
                  label="OEM номер"
                  name="OEM"
                  register={methods.register}
                  error={methods.formState.errors.OEM?.message}
                />
                <TextInput
                  label="VIN"
                  name="VIN"
                  register={methods.register}
                  type="text"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <SelectInput
                  label={'Выберите валюту'}
                  name={'currency'}
                  register={methods.register}
                  options={currenciesOptions.map((el) => ({
                    label: el,
                    value: el,
                  }))}
                />
                <TextInput
                  label={`Цена (${methods.watch('currency')})`}
                  name="price"
                  type="number"
                  error={methods.formState.errors.price?.message}
                  register={methods.register}
                />
                <TextInput
                  label={`Скидка в %`}
                  name="discount"
                  type="number"
                  error={methods.formState.errors.discount?.message || ''}
                  register={methods.register}
                />

                <TextInput
                  label="Количество"
                  name="count"
                  type="number"
                  error={methods.formState.errors.count?.message}
                  register={methods.register}
                />

                <TextInput
                  label="Год выпуска"
                  name="year"
                  type="number"
                  error={methods.formState.errors.year?.message}
                  register={methods.register}
                />
                <TextInput
                  label="Объем двигателя"
                  name="volume"
                  type="number"
                  step="0.1"
                  error={methods.formState.errors.volume?.message}
                  register={methods.register}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-2">
                <SelectInput
                  label="Тип кузова"
                  name="type_of_body"
                  register={methods.register}
                  options={bodyTypeOptions}
                />
                <SelectInput
                  label="Коробка передач"
                  name="gearbox"
                  register={methods.register}
                  options={gearboxOptions}
                />
                <SelectInput
                  label="Тип топлива"
                  name="fuel"
                  register={methods.register}
                  options={fuelOptions}
                />
              </div>
              <div className="flex gap-2 flex-wrap items-center">
                <Button type="button" onClick={onToggleModal}>
                  Добавить характерстики запчасти
                </Button>
                <ChoosedCharacteristics />
              </div>
              <TextInput
                label="Описание"
                name="description"
                register={methods.register}
                rows={3}
              />

              <TextInput
                label="Примечания"
                name="note"
                register={methods.register}
                rows={2}
              />
              {productType === 'disc' && (
                <DiscFields
                  register={methods.register}
                  errors={methods.formState.errors}
                  type={productType}
                />
              )}
              {productType === 'tire' && (
                <TierFields
                  register={methods.register}
                  errors={methods.formState.errors}
                  type={productType}
                />
              )}

              <Button type="submit">Создать продукт</Button>
            </div>
            <DndProvider backend={HTML5Backend}>
              <PhotoUploader
                removedPhotos={removedPhotos}
                existingPhotos={props.pictures}
                name={'product_pictures'}
                isClear={isSuccess}
              />
            </DndProvider>
          </div>
        </form>
      </FormProvider>
      <AddCarPartCharacteristicsModal isOpen={isOpen} onClose={onToggleModal} />
    </>
  );
};
