import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { carSeriesSchema } from '../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { usePostCarSeries } from '../../api/queries';
import { useLocation } from 'react-router-dom';
import { IPostCarSeriesForm } from '../../model/types/carseries.interface';

export const Form = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const brandId = searchParams.get('brandId') as string;

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IPostCarSeriesForm>({
    resolver: zodResolver(carSeriesSchema),
  });

  const { mutate } =
    usePostCarSeries(brandId);

  const handleOnSubmit = handleSubmit((data) => {
    mutate({ data });
  });

  return (
    <form onSubmit={handleOnSubmit}>
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
