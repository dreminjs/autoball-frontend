import { UseFormRegister } from "react-hook-form";
import { ProductFormData } from "../../../model/types/product.interface";
import { FC } from "react";
import { BrandType } from "../../../../../shared/types/brands/type";



interface IProps {
  label: string;
  name: keyof ProductFormData;
  register: UseFormRegister<ProductFormData>;
  options: { value: BrandType ; label: string }[];
}

export const RadioGroup: FC<IProps> = ({
  label,
  name,
  register,
  options
}) => (
  <div className="mb-4">
    <label className="block mb-2 font-medium">{label}</label>
    <div className="flex space-x-4">
      {options.map((option) => (
        <label key={option.value} className="flex items-center">
          <input
            type="radio"
            value={option.value}
            {...register(name)}
            className="mr-2"
          />
          {option.label}
        </label>
      ))}
    </div>
  </div>
);