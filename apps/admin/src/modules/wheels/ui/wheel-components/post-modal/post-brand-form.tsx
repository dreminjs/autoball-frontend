import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import { CustomSnackbar } from '../../../../../components';
import { useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../../shared/constants';
import { useSnackbarVisible } from '../../../../../shared/hooks/use-snackbar-visible';
import { getSnackbarSeverity } from '../../../../../shared/lib/get-snackbar-severity';
import {
  IPostWheelComponentBrand,
  PostWheelComponentBrandSchema,
} from '../../../model/schemas/post-wheel-component-brand';
import { usePostWheelBrand } from '../../../api/queries';
import { getSnackbarMessage } from '../../../../../shared';

interface IProps {
  isLoading?: boolean;
  onClose: () => void;

}

export const PostBrandForm: FC<IProps> = ({ isLoading, onClose }) => {
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPostWheelComponentBrand>({
    resolver: zodResolver(PostWheelComponentBrandSchema),
  
  });

  const { mutate, isError, isPending, isSuccess, error } = usePostWheelBrand();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state: isError || isPending || isSuccess,
  });

  const handleOnSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [SERVICE_URLS.carbrand],
    });

    setTimeout(() => {
      onClose();
      onHideSnackbar();
    }, 1500);
  };

  const hadlePostSubmit = (data: IPostWheelComponentBrand) => {
    mutate(
      { name: data.name },
      {
        onSuccess: handleOnSuccess,
      }
    );
  };

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          hadlePostSubmit(data);
        })}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Название Бренда
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
            disabled={isLoading}
          >
            Сброс
          </button>
          <button
            type="submit"
            className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Загрузка...' : 'Добавить бренд'}
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
