import { ICarSeries } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IEditCarSeriesForm } from '../../model/types/carseries.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateCarSeriesSchema } from '../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { Button } from '../../../../components/buttons';
import { useEditCarSeries } from '../../api/queries';

interface IProps {
  series: Partial<ICarSeries>;
  onClose: () => void;
}

export const Form: FC<IProps> = ({ series, onClose }) => {
  const seriesId = series.id as string;

  const [fromYear, toYear] = series.year ? series.year.split('-') : [];

  const { register, formState, handleSubmit } = useForm<IEditCarSeriesForm>({
    resolver: zodResolver(updateCarSeriesSchema),
    defaultValues: {
      name: series.name?.trim(),
      from: fromYear.trim(),
      to: toYear.trim(),
    },
  });

  const { mutate } = useEditCarSeries(seriesId);

  const handleEditSubmit = handleSubmit((data: IEditCarSeriesForm) => {
    mutate(data);
  });

  return (
    <form onSubmit={handleEditSubmit}>
      <FormField
        register={register}
        type={'name'}
        error={formState.errors.name?.message}
        placeholder={'Название серии'}
      />
      <FormField
        register={register}
        type={'from'}
        error={formState.errors.from?.message}
        placeholder={'с какого года'}
      />
      <FormField
        error={formState.errors.to?.message}
        register={register}
        type={'to'}
        placeholder={'по какой год'}
      />
      <Button type="submit">Отправить</Button>
    </form>
  );
};
