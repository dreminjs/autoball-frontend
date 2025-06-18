import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { carSeriesSchema } from '../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { usePostCarSeries } from '../../api/queries';
import { ICreateCarSeriesForm } from '../../model/types/carseries.interface';
import { useLocation } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import { useSnackbarVisible } from '../../../../shared/hooks/use-snackbar-visible';
import { CustomSnackbar } from '../../../../components';
import { getSnackbarMessage } from '../../../../shared/lib/get-message-snackbar';
import { getSnackbarSeverity } from '../../../../shared/lib/get-snackbar-severity';

interface IProps {
  onClose: () => void;
}

export const Form: FC<IProps> = ({ onClose }) => {
  const queryClient = useQueryClient();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const brandId = searchParams.get('brandId');

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(carSeriesSchema),
  });

  const { mutate, isError, isPending, isSuccess, error } = usePostCarSeries();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const onSubmit = (data: ICreateCarSeriesForm) => {
    mutate(
      {
        year: `${data.from} - ${data.to}`,
        car_brand_id: brandId || '',
        name: data.name,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: [SERVICE_URLS.carseries, brandId || ''],
          });

          setTimeout(() => {
            onHideSnackbar();
            onClose();
          }, 2000);
        },
      }
    );
  };

  return (
    <>
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
      <CustomSnackbar
        isOpen={snackbarOpen}
        severity={getSnackbarSeverity({
          isError,
          isSuccess,
          isPending,
        })}
        message={getSnackbarMessage(
          {
            isError,
            isSuccess,
            isPending,
          },
          { error: error?.response?.data.detail }
        )}
      />
    </>
  );
};
