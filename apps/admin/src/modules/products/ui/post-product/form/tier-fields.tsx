import { FieldErrors, UseFormRegister } from 'react-hook-form';
import { TextInput } from './text-input';
import { ProductFormData } from '../../../model/schemas/product.schema';
import { FC } from 'react';
import { SelectInput } from './select-input';
import { diameterOptions } from '../../../model/data';
import { BrandType } from '../../../../../shared/types/brands/type';
import { ChooseBrandTire } from './choose-brand-tire/choose-brand-tire';

interface IProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  type: BrandType;
}

export const TierFields: FC<IProps> = ({ register, errors, type }) => {
  return (
  <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Характеристики диска</h3>
      <div
        className="grid grid-rows-3 grid-cols-1 md:grid-cols-3 gap-4"
        style={{ gridTemplateRows: '100px 100px' }}
      >
        <SelectInput
          label="Диаметр шины"
          name="tires_diametr"
          register={register}
          options={diameterOptions.map((value) => ({ value, label: value }))}
        />
        <TextInput
          label="Ширина шины"
          name="tires_width"
          type="number"
          register={register}
          error={errors.tires_width?.message}
        />
        <TextInput
          label="Высота профиля (%)"
          name="tires_height"
          type="number"
          register={register}
          error={errors.tires_height?.message}
        />
        <TextInput
          label="Индекс нагрузки/скорости"
          name="tires_index"
          register={register}
          error={errors.tires_index?.message}
        />
        <SelectInput
          label="Сезонность"
          name="tires_season"
          register={register}
          options={[
            { value: 'winter', label: 'Зимние' },
            { value: 'summer', label: 'Летние' },
            { value: 'all_season', label: 'Всесезонные' },
          ]}
        />
        <TextInput
          label="Остаток протектора (%)"
          name="tires_residue"
          type="number"
          register={register}
          error={errors.tires_residue?.message}
        />
        <div className="w-[300px]">
          <ChooseBrandTire />
        </div>
      </div>
    </div>
  );
};
