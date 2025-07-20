import { FieldValues, UseFormRegister, Path } from 'react-hook-form';

interface IProps<T extends FieldValues> {
  label: string;
  placeholder?: string;
  register: UseFormRegister<T>;
  name: Path<T>;
  error?: string;
  type?: React.HTMLInputTypeAttribute;
}

export const FormTextarea = <T extends FieldValues>({
  label,
  name,
  register,
  error,
  type = 'text',
}: IProps<T>) => {
  return (
    <div className='mb-5'>
      <label className="block mb-1">{label}</label>
      <textarea
        className="w-full p-2 border rounded"
        {...register(name, { valueAsNumber: type === 'number' })}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
