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
import { SelectInput } from '../edit-product/form/select-input';
import { TextInput } from './form/text-input';
import { DndProvider } from 'react-dnd';
import { Photo, PhotoUploader } from './form/photo-uploader';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { RadioGroup } from './form/radio-group';
import { DiscFields } from './form/disc-fields';
import { AddCarPartCharacteristicsModal } from './form/characteristics/add-car-part-characteristics/add-car-part-characteristics-modal';
import { useCarPartCharacteristicsModal } from '../../model/hooks/products/use-car-part-characteristics-modal';
import { ChoosedCharacteristics } from './form/characteristics/add-car-part-characteristics/choosed-characteristics';
import { usePostProduct } from '../../model/api/queries';
import { useEffect } from 'react';
import { useResetForm } from '../../model/hooks/post-products/use-reset-form';
import { TierFields } from './form/tier-fields';
import { useChooseDiscBrand } from '../../model/hooks/post-products/disc/use-choose-disc';
import { useChooseTireBrand } from '../../model/hooks/post-products/tire/use-choose-tire';

export const PostProductForm = () => {
  const { choosedDiscBrand, onCancel: onCancelDiscBrand } = useChooseDiscBrand();

  const { choosedTireBrand, onCancel: onCancelTireBrand } = useChooseTireBrand();

  const methods = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      condition: 'used',
      count: 1,
      price: 0,
      volume: 0,
      productType: 'car',
      discount: 0,
      currency: 'USD',
    },
  });

  const { isOpen, onToggleModal } = useCarPartCharacteristicsModal();

  const { mutate, isSuccess } = usePostProduct();

  const productType = methods.watch('productType');

  const onSubmit = methods.handleSubmit((data: ProductFormData) => {
    mutate({
      ...data,
      disc_brand_id: choosedDiscBrand?.id,
      tire_brand_id: choosedTireBrand?.id,
    });
  });

  useResetForm(isSuccess, methods.reset);

  useEffect(() => {
    onCancelDiscBrand()
    onCancelTireBrand()
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

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit} className="space-y-4 p-4 mx-auto">
          <div className="flex gap-2 flex-wrap">
            <div className='max-w-[780px]'>
              <h2 className="text-2xl font-bold">Создание нового продукта</h2>
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-3">
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

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
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
                  placeholder="2000"
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
                <TextInput
                  label="Тип двигателя"
                  name="engine_type"
                  placeholder="TDI"
                  error={methods.formState.errors.volume?.message}
                  register={methods.register}
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-3">
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
              <div className="flex gap-2 flex-wrap items-center mb-3">
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
            </div>
            <div>
              <DndProvider backend={HTML5Backend}>
                <PhotoUploader name={'product_pictures'} isClear={isSuccess} />
              </DndProvider>
            </div>
          </div>
          <Button type="submit">Создать продукт</Button>
        </form>
      </FormProvider>
      <AddCarPartCharacteristicsModal isOpen={isOpen} onClose={onToggleModal} />
    </>
  );
};
