import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FC } from 'react';
import {
  IPostCarPart,
  PostCarPartSchema,
} from '../../../model/schemas/post-car-part';
import { usePostCarPart } from '../../../api/queries';

export const PostBrandForm: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IPostCarPart>({
    resolver: zodResolver(PostCarPartSchema),
  });

  const { mutate, isPending } = usePostCarPart();

  return (
    <form
      onSubmit={handleSubmit((data) => {
        mutate(data);
      })}
      className="space-y-6"
    >
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Название Запчасти
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
          {isPending ? 'Загрузка...' : 'Добавить бренд'}
        </button>
      </div>
    </form>
  );
};
