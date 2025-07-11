import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { carBrandSchema } from "../../../model/schemas/car-brand.schema";
import { CarBrandForm } from "../../../model/types/car-brand";
import { useChooseBrand } from "../../../model/hooks";

export const EditBrandForm = ({
  isLoading
}: {
  isLoading?: boolean;
}) => {
  const { choosedBrand } = useChooseBrand();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset
  } = useForm<CarBrandForm>({
    resolver: zodResolver(carBrandSchema),
    defaultValues: {
      name: choosedBrand?.name
    }
  });

  const preview = watch("brand_logo") ? URL.createObjectURL(watch('brand_logo')) : `http://localhost:9000/avtobol/${choosedBrand?.picture}`

  return (
    <form onSubmit={handleSubmit((data) => console.log(data))} className="space-y-6">
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

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Лого
        </label>
        <div className="flex items-center gap-4">
          {preview && (
            <div className="w-15 h-12 rounded-lg overflow-hidden border">
              <img
                src={preview}
                alt="Preview"
                className="w-full h-full object-contain"
              />
            </div>
          )}
          <label className="cursor-pointer">
            <div className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-sm">
              {preview ? 'Поменять лого' : 'Загрузить лого'}
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
          <p className="mt-1 text-sm text-red-600">{errors.brand_logo.message}</p>
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
          {isLoading ? 'Загрузка...' : 'Сохранить Бренд'}
        </button>
      </div>
    </form>
  );
};