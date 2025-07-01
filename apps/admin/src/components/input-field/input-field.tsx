import { UseFormRegister, Path, FieldValues } from 'react-hook-form';

interface IProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const InputField = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = 'text',
}: IProps<T>) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        className="w-full p-2 border rounded"
        {...register(name, { valueAsNumber: type === 'number' })}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};