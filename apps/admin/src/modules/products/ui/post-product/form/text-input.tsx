import { FC } from 'react';
import { UseFormRegister } from 'react-hook-form';
import { ProductFormData } from '../../../model/types/product.interface';

interface IProps {
  label: string;
  name: keyof ProductFormData;
  register: UseFormRegister<ProductFormData>;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
  step?: string;
  rows?: number;
}

export const TextInput: FC<IProps> = ({
  label,
  name,
  register,
  error,
  type,
  step,
  rows,
}) => {
  const inputProps = {
    className: 'w-full p-2 border rounded',
    ...(step && { step }),
  };

  return (
    <div>
      <label className="block mb-1">{label}</label>
      {rows ? (
        <textarea {...register(name)} {...inputProps} rows={rows} />
      ) : (
        <input
          type={type}
          {...register(name, { ...{ valueAsNumber: type === 'number' }, })}
          {...inputProps}
        />
      )}
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
