import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { carSeriesSchema } from '../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { usePostCarSeries } from '../../api/queries';
import { ICreateCarSeriesForm } from '../../model/types/carseries.interface';
import { useLocation } from 'react-router-dom';

export const PostSeriesForm: FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: zodResolver(carSeriesSchema),
  });

  const { mutate, isError, isPending, isSuccess, error } = usePostCarSeries();

  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const brandId = searchParams.get('brandId');

  const onSubmit = (data: ICreateCarSeriesForm) => {
    mutate({
      year: `${data.from} - ${data.to}`,
      car_brand_id: brandId || "", 
      name: data.name,
    });
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormField
        register={register}
        type={'name'}
        error={errors.name?.message}
        placeholder={'Введите название серии'}
      />
      <FormField
        register={register}
        type={'from'}
        error={errors.name?.message}
        placeholder={'Введите с какого года'}
      />
      <FormField
        register={register}
        type={'to'}
        error={errors.to?.message}
        placeholder={'Введите по какой год'}
      />
      <button type="submit" className="border rounded-xl px-5 py-2">
        Отправить
      </button>
    </form>
  );
};
