import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC, useMemo } from 'react';
import { usePostCarBrand } from '../../../api/queries';
import { carBrandSchema } from '../../../model/schemas/car-brand.schema';
import { CarBrandForm } from '../../../model/types/car-brand';
import {
  useGetPresignUrl,
  usePostPhoto,
} from '../../../../../shared/api/s3/queries';
import { generateRandomString } from '../../../../../shared';
import { useQueryClient } from '@tanstack/react-query';
import { SERVICE_URLS } from '../../../../../shared/constants';
import { useSnackbarVisible } from '../../../../../shared/hooks/use-snackbar-visible';

interface IProps {
  isLoading?: boolean;
  onClose: () => void;
}

export const PostBrandForm: FC<IProps> = ({ isLoading, onClose }) => {
  const filename = useMemo(() => generateRandomString(), []);
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<CarBrandForm>({
    resolver: zodResolver(carBrandSchema),
  });

  const {
    mutate: postCarBrand,
    isError: postCarBrandIsError,
    isPending: postCarBrandIsPending,
    isSuccess: postCarBrandIsSuccess,
  } = usePostCarBrand();

  const {
    mutate: postPhoto,
    isError: postPhotoIsError,
    isPending: postPhotoIsPending,
    isSuccess: postPhotoIsSuccess,
  } = usePostPhoto();

  const { snackbarOpen, onHideSnackbar } = useSnackbarVisible({
    state:
      postCarBrandIsError ||
      postPhotoIsError ||
      postCarBrandIsPending ||
      postPhotoIsPending ||
      postCarBrandIsSuccess ||
      postPhotoIsSuccess,
  });

  const { data: urlData } = useGetPresignUrl({
    content_type: watch('brand_logo')?.type,
    filename,
  });

  const preview = watch('brand_logo')
    ? URL.createObjectURL(watch('brand_logo'))
    : null;

  const handleOnSuccess = () => {
    queryClient.invalidateQueries({
      queryKey: [SERVICE_URLS.carbrand],
    });

    setTimeout(() => {
      onClose();
      onHideSnackbar();
    }, 1500);
  };

  const hadlePostSubmit = (data: CarBrandForm) => {
    postCarBrand(
      { name: data.name, picture: `${filename}` },
      {
        onSuccess: handleOnSuccess,
      }
    );
    postPhoto({
      files: [data.brand_logo],
      url: urlData?.url,
      filenames: [`${filename}`],
    });
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
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Логотип
          </label>
          <div className="flex items-center gap-4">
            {preview && (
              <div className="w-16 h-16 rounded-lg overflow-hidden border">
                <img
                  src={preview}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            )}
            <label className="cursor-pointer">
              <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
                {preview ? 'Поменять фото' : 'Загрузить лого'}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setValue('brand_logo', e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
          {errors.brand_logo && (
            <p className="mt-1 text-sm text-red-600">
              {errors.brand_logo.message}
            </p>
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
      {/* <CustomSnackbar
        isOpen={snackbarOpen}
        severity={getSnackbarSeverity({
          isError: postPhotoIsError || postCarBrandIsError,
          isPending: postCarBrandIsPending,
          isSuccess: postCarBrandIsSuccess,
        })}
        message={getPostCarBrandSnackbarMessage({
          postCarBrandIsPending,
          postPhotoIsPending,
          postCarBrandIsError,
          postPhotoIsError,
          postCarBrandIsSuccess,
          postPhotoIsSuccess,
        })}
      /> */}
    </>
  );
};
