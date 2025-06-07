import { useForm } from 'react-hook-form';
import { CarBrandForm } from '../../model/types/car-brand';
import { zodResolver } from '@hookform/resolvers/zod';
import { carBrandSchema } from '../../model/schemas/car-brand.schema';
import { useEffect } from 'react';
import { usePostCarBrand } from '../../../../shared/api/brand/queries';
import Snackbar from '@mui/material/Snackbar';

export const PostBrandForm = ({ isLoading }: { isLoading?: boolean }) => {
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

  const { mutate, isError, isPending, isSuccess } = usePostCarBrand();

  useEffect(() => {
    if (isSuccess) {
      reset();
    }
  }, [isSuccess, reset]);

  const preview = watch('picture')
    ? URL.createObjectURL(watch('picture'))
    : null;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Brand Name
          </label>
          <input
            {...register('name')}
            type="text"
            className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
              errors.name ? 'border-red-500' : 'border-gray-300'
            }`}
            placeholder="Enter brand name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Logo
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
                {preview ? 'Change Image' : 'Upload Image'}
              </div>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setValue('picture', e.target.files[0]);
                  }
                }}
              />
            </label>
          </div>
          {errors.picture && (
            <p className="mt-1 text-sm text-red-600">
              {errors.picture.message}
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
            Reset
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
      <Snackbar
        open={isError || isPending || isSuccess}
        autoHideDuration={1000}
        message="Note archived"
      />
    </>
  );
};
