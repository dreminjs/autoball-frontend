import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EditWheelComponentBrandSchema,
  IEditWheelComponentBrand,
} from '../../../model/schemas/edit-wheel-component-brand';
import { useEditWheelBrand } from '../../../api/queries';
import { CustomSnackbar } from '../../../../../components';
import { getSnackbarMessage } from '../../../../../shared';
import { getSnackbarSeverity } from '../../../../../shared/lib/get-snackbar-severity';
import { useSnackbarVisible } from '../../../../../shared/hooks/use-snackbar-visible';
import { FC } from 'react';
import { IWheelComponentBrand } from '@autoball-frontend/shared-types';

interface IProps {
  onClose: () => void;
  brand: Partial<IWheelComponentBrand>;
}

export const EditBrandForm: FC<IProps> = ({ onClose, brand }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IEditWheelComponentBrand>({
    resolver: zodResolver(EditWheelComponentBrandSchema),
    defaultValues: {
      name: brand.name,
    },
  });

  const { mutate, isError, isPending, isSuccess, error } = useEditWheelBrand();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const handleOnSuccess = () => {
    setTimeout(() => {
      onClose();
      onHideSnackbar();
    }, 1500);
  };

  const hadleEditSubmit = (data: IEditWheelComponentBrand) => {
    mutate(
      { name: data.name, id: brand.id },
      {
        onSuccess: handleOnSuccess,
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => hadleEditSubmit(data))}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Имя бренда
          </label>
          <input
            {...register('name')}
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="введите название"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={() => reset()}
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
            disabled={isPending}
          >
            Сброс
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isPending}
          >
            {isPending ? 'Загрузка...' : 'Сохранить Бренд'}
          </button>
        </div>
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
          {
            error: error?.message || 'Erorr!',
          }
        )}
      />
    </>
  );
};
