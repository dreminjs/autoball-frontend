import { FieldValues, Path, UseFormRegister } from 'react-hook-form';

interface IProps<T extends FieldValues> {
  label: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  error?: string;
}

export const TextareaField = <T extends FieldValues>({
  label,
  name,
  error,
  register
}: IProps<T>) => {
  return (
    <div>
      <label className="block mb-1">{label}</label>
      <textarea
        className="w-full p-2 border rounded"
        {...register(name)}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};
