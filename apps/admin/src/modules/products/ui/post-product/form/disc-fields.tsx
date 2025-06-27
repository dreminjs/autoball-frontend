import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ProductFormData } from '../../../model/schemas/product.schema';
import { FC } from 'react';
import { TextInput } from './text-input';
import { SelectInput } from './select-input';
import { diameterOptions } from '../../../model/data';
import { ChooseBrand } from '../../../../car-brands';
import { BrandType } from '../../../../../shared/interfaces/brands/type';

interface IProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  choosedItemId: string | null;
  onChoose: (data: string | null) => void;
  type: BrandType;
}

export const DiscFields: FC<IProps> = ({
  errors,
  register,
  choosedItemId,
  onChoose,
  type,
}) => {
  return (
    <div className="bg-blue-50 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-3">Характеристики диска</h3>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-3 gap-4" style={{ gridTemplateRows: "100px 300px",  }}>
        <SelectInput
          label="Диаметр диска"
          name="disc_diametr"
          register={register}
          options={diameterOptions.map((value) => ({ value, label: value }))}
        />
        <TextInput
          label="Ширина диска"
          name="tires_width"
          type="number"
          register={register}
          error={errors.tires_width?.message}
        />
        <TextInput
          label="Высота профиля"
          name="tires_height"
          type="number"
          register={register}
          error={errors.tires_height?.message}
        />
        <ChooseBrand
          choosedItemId={choosedItemId}
          onChoose={(data) => onChoose(data)}
          type={type}
        />
      </div>
    </div>
  );
};
