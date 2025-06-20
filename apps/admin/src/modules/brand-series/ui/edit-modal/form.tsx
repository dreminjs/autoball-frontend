import { ICarSeries } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { IUpdateCarSeriesForm } from '../../model/types/carseries.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateCarSeriesSchema } from '../../model/schemas/carseries.schema';
import { FormField } from './form-field';
import { Button } from '../../../../components/buttons';
import { useSnackbarVisible } from '../../../../shared/hooks/use-snackbar-visible';
import { useEditCarSeries } from '../../api/queries';
import { CustomSnackbar } from '../../../../components';
import { getSnackbarSeverity } from '../../../../shared/lib/get-snackbar-severity';
import { useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../shared/constants';
import { getSnackbarMessage } from '../../../../shared';

interface IProps {
  series: Partial<ICarSeries>;
  onClose: () => void;
}

export const Form: FC<IProps> = ({ series, onClose }) => {
  const queryClient = useQueryClient();

  const [fromYear, toYear] = series.year ? series.year.split('-') : [];

  const { register, formState, handleSubmit } = useForm<IUpdateCarSeriesForm>({
    resolver: zodResolver(updateCarSeriesSchema),
    defaultValues: {
      name: series.name?.trim(),
      from: fromYear.trim(),
      to: toYear.trim(),
    },
  });

  const { isError, isPending, isSuccess, mutate, error } = useEditCarSeries();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const handleOnSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [SERVICE_URLS.carseries],
    });

    setTimeout(() => {
      onHideSnackbar();
      onClose();
    }, 2000);
  };

  const handleEditSubmit = (data: IUpdateCarSeriesForm) => {
    series.id &&
      mutate(
        {
          id: series.id,
          data: {
            ...data,
            year: `${data.from} - ${data.to}`,
          },
        },
        {
          onSuccess: handleOnSuccess,
        }
      );
  };

  return (
    <>
      <form onSubmit={handleSubmit((data) => handleEditSubmit(data))}>
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
        <Button variant="default" type="submit">
          Отправить
        </Button>
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
          { error: error?.response?.data.detail || "error" }
        )}
      />
    </>
  );
};
