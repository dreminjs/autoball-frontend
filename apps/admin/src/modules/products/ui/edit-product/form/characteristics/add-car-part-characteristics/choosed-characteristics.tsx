import { useChooseCarBrand } from '../../../../../model/hooks/post-products/car/use-choose-car-brand';
import { useChooseCarPart } from '../../../../../model/hooks/post-products/car/use-choose-car-part';
import { useChooseSeries } from '../../../../../model/hooks/post-products/car/use-choose-series';

export const ChoosedCharacteristics = () => {
  const { onChooseBrand, brand } = useChooseCarBrand();

  const { onChooseCarPart, choosedCarPart } = useChooseCarPart();

  const { onChooseSeries, choosedSeries } = useChooseSeries();

  return (
    <div className="flex items-center gap-2">
      {brand && (
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
          <span className="font-medium">Выбранный бренд: {brand.name}</span>
          <button
            onClick={() => onChooseBrand(null)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            × Убрать
          </button>
        </div>
      )}

      {choosedCarPart && (
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
          <span className="font-medium">
            Выбранная запчасть: {choosedCarPart.name}
          </span>
          <button
            onClick={() => onChooseCarPart(null)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            × Убрать
          </button>
        </div>
      )}

      {choosedSeries && (
        <div className="flex items-center justify-between p-3 bg-gray-100 rounded-lg">
          <span className="font-medium">
            Выбранная Серия: {choosedSeries.name}
          </span>
          <button
            onClick={() => onChooseSeries(null)}
            className="text-red-500 hover:text-red-700 ml-4"
          >
            × Убрать
          </button>
        </div>
      )}

      {!brand && !choosedCarPart && !choosedSeries && (
        <div className="text-gray-500 italic p-3 bg-gray-50 rounded-lg">
          Ничего не выбрано
        </div>
      )}
    </div>
  );
};
