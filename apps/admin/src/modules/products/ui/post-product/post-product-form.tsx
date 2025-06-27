import {
  RegisterOptions,
  useForm,
  UseFormRegisterReturn,
} from 'react-hook-form';
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
import { PhotoUploader } from './form/photo-uploader';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { TierFields } from './form/tier-fields';
import { RadioGroup } from './form/radio-group';
import { DiscFields } from './form/disc-fields';
import { ChooseBrand } from '../../../car-brands';
import { useChooseCarBrand } from '../../model/hooks/use-choose-car-brand';
import { useChooseDiscBrand } from '../../model/hooks/use-choose-disc-brand';
import { useChooseTireBrand } from '../../model/hooks/use-choose-tire-brand';

export const PostProductForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProductFormData>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      condition: 'used',
      gearbox: 'manual',
      fuel: 'gasoline',
      type_of_body: 'sedan',
      count: 1,
      real_price: 0,
      fake_price: 0,
      volume: 0,
      productType: 'car',
      disc_diametr: 'R12',
      tires_diametr: 'R12',
    },
  });

  const { onChooseBrand: onChooseCarBrand, brandId: carBrandId } =
    useChooseCarBrand();

  const { onChooseBrand: onChooseTireBrand, brandId: tireBrandId } =
    useChooseTireBrand();

  const { onChooseBrand: onChooseDiscBrand, brandId: discBrandId } =
    useChooseDiscBrand();

  const productType = watch('productType');

  const onSubmit = (data: ProductFormData) => {
    console.log('Product data:', data);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4 mx-auto">
        <h2 className="text-2xl font-bold">Создание нового продукта</h2>
        <RadioGroup
          label="Тип продукта"
          name="productType"
          register={register}
          options={[
            { value: 'tire', label: 'Шины' },
            { value: 'disc', label: 'Диски' },
            { value: 'car', label: 'Другие детали' },
          ]}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextInput
            label="OEM номер"
            name="OEM"
            register={register}
            error={errors.OEM?.message}
          />
          <TextInput label="VIN" name="VIN" register={register} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectInput
            label={'Выберите валюту'}
            name={'currency'}
            register={register}
            options={currenciesOptions.map((el) => ({ label: el, value: el }))}
          />
          <TextInput
            label={`Реальная цена (${watch("currency")})`}
            name="real_price"
            type="number"
            error={errors.real_price?.message}
            register={register}
          />
          <TextInput
            label={`Фейковая цена (${watch("currency")})`}
            name="fake_price"
            type="number"
            error={errors.fake_price?.message}
            register={register}
          />
          <TextInput
            label="Количество"
            name="count"
            type="number"
            error={errors.count?.message}
            register={register}
          />

          <TextInput
            label="Год выпуска"
            name="year"
            type="number"
            error={errors.year?.message}
            register={register}
          />
          <TextInput
            label="Объем двигателя"
            name="volume"
            type="number"
            step="0.1"
            error={errors.volume?.message}
            register={register}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <SelectInput
            label="Тип кузова"
            name="type_of_body"
            register={register}
            options={bodyTypeOptions}
          />
          <SelectInput
            label="Коробка передач"
            name="gearbox"
            register={register}
            options={gearboxOptions}
          />
          <SelectInput
            label="Тип топлива"
            name="fuel"
            register={register}
            options={fuelOptions}
          />
        </div>
        {productType === 'car' && (
          <ChooseBrand
            choosedItemId={carBrandId}
            onChoose={(data) => onChooseCarBrand(data)}
            type={productType}
          />
        )}

        <TextInput
          label="Описание"
          name="description"
          register={register}
          rows={3}
        />

        <TextInput
          label="Примечания"
          name="note"
          register={register}
          rows={2}
        />
        {productType === 'disc' && (
          <DiscFields
            register={register}
            errors={errors}
            choosedItemId={discBrandId}
            onChoose={onChooseDiscBrand}
            type={productType}
          />
        )}
        {productType === 'tire' && (
          <TierFields
            register={register}
            errors={errors}
            choosedItemId={tireBrandId}
            onChoose={onChooseTireBrand}
            type={productType}
          />
        )}

        <DndProvider backend={HTML5Backend}>
          <PhotoUploader onPhotosChange={(photos) => console.log(photos)} />
        </DndProvider>

        <Button type="submit">Создать продукт</Button>
      </form>
    </div>
  );
};
