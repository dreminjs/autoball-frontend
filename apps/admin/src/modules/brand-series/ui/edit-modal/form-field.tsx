


import { UseFormRegister } from 'react-hook-form';
import { IUpdateCarSeriesForm } from '../../model/types/carseries.interface';
import { FC } from 'react';

interface IProps {
  register: UseFormRegister<IUpdateCarSeriesForm>;
  type: keyof IUpdateCarSeriesForm;
  error?: string;
  placeholder: string
}

export const FormField: FC<IProps> = ({ register, type, error, placeholder }) => {
  return (
    <fieldset className='mb-5'>
      <input placeholder={placeholder} className='border-b-2 outline-none' type="text" {...register(type)} />
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </fieldset>
  );
};
