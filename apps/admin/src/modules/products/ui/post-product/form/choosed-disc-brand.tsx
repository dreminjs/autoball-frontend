import { useChooseDiscBrand } from '../../../model/hooks/post-products/disc/use-choose-disc';

export const ChoosedDiscBrand = () => {
  const { choosedDiscBrand, onCancel } = useChooseDiscBrand();

  return (
    <div className="flex items-center gap-2 bg-white rounded-md">
      {choosedDiscBrand ? (
        <div className='p-2 flex gap-2'>
          <span>{choosedDiscBrand.name}</span>
          <button
            onClick={onCancel}
            className="text-red-500 hover:text-red-700"
            aria-label="Убрать выбранный бренд"
          >
            × Убрать
          </button>
        </div>
      ) : (
        <div className="text-gray-500 italic p-3 bg-gray-50 rounded-lg">
          Ничего не выбрано
        </div>
      )}
    </div>
  );
};
