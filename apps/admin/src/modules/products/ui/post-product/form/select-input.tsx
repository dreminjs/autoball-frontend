import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ProductFormData } from "../../../model/types/product.interface";


interface IProps {
  label: string;
  name: keyof ProductFormData;
  register: UseFormRegister<ProductFormData>;
  options: { value: string; label: string }[];
  hasNullOption?: boolean;
}

export const SelectInput: FC<IProps> = ({
  label,
  name,
  register,
  options,
  hasNullOption = true
}) => (
  <div>
    <label className="block mb-1">{label}</label>
    <select {...register(name)} className="w-full p-2 border rounded">
      {hasNullOption && (
        <option value="">не важно</option>
      )}
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);