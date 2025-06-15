import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { carSeriesSchema } from '../../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { usePostCarSeries } from '../../../api/queries';
import { choosedBrandIdAtom } from '../../../../car-brands/model/store-page';
import { useAtomValue } from 'jotai';
import {
  ICreateCarSeriesForm,
} from '../../../model/types/carseries.interface';
import Modal from '@mui/material/Modal';

interface IProps {
  isOpen: boolean
}

export const PostSeriesForm: FC<IProps> = ({ isOpen }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset
  } = useForm({
    resolver: zodResolver(carSeriesSchema),
  });

  const { mutate, isError, isPending, isSuccess, error } = usePostCarSeries();

  const choosedBrandId = useAtomValue(choosedBrandIdAtom);

  const onSubmit = (data: ICreateCarSeriesForm) => {
    mutate({
      year: `${data.from} - ${data.to}`,
      car_brand_id: choosedBrandId || '',
      name: data.name,
    });
    reset()
  };

  return (
    <Modal open={isOpen}>
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
    </Modal>
  );
};
