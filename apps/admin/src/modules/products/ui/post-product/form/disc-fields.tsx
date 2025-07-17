import { UseFormRegister, FieldErrors } from 'react-hook-form';
import { ProductFormData } from '../../../model/schemas/product.schema';
import { FC, useState } from 'react';
import { TextInput } from './text-input';
import { SelectInput } from '../../edit-product/form/select-input';
import { diameterOptions } from '../../../model/data';
import { BrandType } from '../../../../../shared/types/brands/type';
import { ChooseBrandDisc } from './choose-brand-disc/choose-brand-disc';
import { ChoosedDiscBrand } from './choosed-disc-brand';

interface IProps {
  register: UseFormRegister<ProductFormData>;
  errors: FieldErrors<ProductFormData>;
  type: BrandType;
}

export const DiscFields: FC<IProps> = ({ errors, register, type }) => {

  const [isAccordionActive,setIsAccordionActive] = useState(false)

  return (
    <div className="bg-blue-50 p-4 rounded-lg mb-2">
      <h3 className="text-lg font-semibold mb-3">Характеристики диска</h3>
      <div className={`grid grid-cols-3 gap-2 ${isAccordionActive ? "items-start" : "items-end"}`}>
        <SelectInput
          label="Диаметр диска"
          name="disc_diametr"
          register={register}
          options={diameterOptions.map((value) => ({ value, label: value }))}
        />
        <TextInput
          label="Ширина диска"
          name="disc_width"
          type="number"
          register={register}
          error={errors.disc_width?.message}
        />
        <TextInput
          label="Модель"
          name="disc_model"
          type="text"
          register={register}
          error={errors.disc_model?.message}
        />
        <TextInput
          label="DIA"
          name="disc_dia"
          type="number"
          register={register}
          error={errors.disc_dia?.message}
        />
        <TextInput
          label="PCD"
          name="disc_pcd"
          type="number"
          register={register}
          error={errors.disc_pcd?.message}
        />
        <TextInput
          label="Вылет"
          name="disc_ejection"
          type="number"
          register={register}
          error={errors.disc_ejection?.message}
        />
        <TextInput
          label="Кол-во отверстий"
          name="disc_holes"
          type="number"
          register={register}
          error={errors.disc_holes?.message}
        />
        <ChooseBrandDisc onToggleActiveAccordion={() => setIsAccordionActive(prev => !prev) } />
        <ChoosedDiscBrand />
      </div>
    </div>
  );
};
