import { useChooseTireBrand } from '../../../model/hooks/post-products/tire/use-choose-tire';

export const ChoosedTireBrand = () => {
  const { choosedTireBrand, onCancel } = useChooseTireBrand();

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {choosedTireBrand ? (
        <div className="p-2  flex">
          <div className='flex flex-col'>
            <span>Выбранная шина</span>
            <span>{choosedTireBrand.name}</span>
          </div>
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
    </>
  );
};
