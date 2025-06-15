import { FC } from "react";
import { UseFormRegister } from "react-hook-form";
import { ProductFormData } from "../../../model/types/product.interface";

interface IProps {
  label: string;
  name: keyof ProductFormData;
  register: UseFormRegister<ProductFormData>;
  error?: string;
  type?: string;
  step?: string;
  rows?: number;
}

export const TextInput: FC<IProps> = ({
  label,
  name,
  register,
  error,
  type = "text",
  step,
  rows
}) => {
  const inputProps = {
    ...register(name),
    className: "w-full p-2 border rounded",
    type,
    ...(step && { step })
  };

  return (
    <div>
      <label className="block mb-1">{label}</label>
      {rows ? (
        <textarea {...inputProps} rows={rows} />
      ) : (
        <input {...inputProps} />
      )}
      {error && (
        <p className="text-red-500 text-sm">{error}</p>
      )}
    </div>
  );
};