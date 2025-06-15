import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from '../../../../components/buttons';
import { productSchema } from '../../model/schemas/product.schema';
import { ProductFormData } from '../../model/types/product.interface';
import {
  conditionOptions,
  bodyTypeOptions,
  gearboxOptions,
  fuelOptions,
} from '../../model/data';
import { SelectInput } from './form/select-input';
import { TextInput } from './form/text-input';

export const PostProductForm = () => {
  const {
    register,
    handleSubmit,
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
    },
  });

  const onSubmit = (data: ProductFormData) => {
    console.log('Product data:', data);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 max-w-2xl mx-auto"
      >
        <h2 className="text-2xl font-bold">Создание нового продукта</h2>

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
          <TextInput
            label="Реальная цена (BYN)"
            name="real_price"
            type="number"
            error={errors.real_price?.message}
            register={register}
          />
          <TextInput
            label="Фейковая цена (BYN)"
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
          {/*
        <SelectInput
          label="Состояние"
          name="condition"
          register={register}
          options={conditionOptions}
        />
          */}
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

        <Button type="submit">Создать продукт</Button>
      </form>
    </div>
  );
};
