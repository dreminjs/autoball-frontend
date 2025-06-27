import { FC } from 'react';
import { BrandType } from '../../../../shared/interfaces/brands/type';
import { useBrands } from '../../model/hooks/use-brands';
import { BrandList } from './list';

interface IProps {
  choosedItemId: string | null;
  onChoose: (data: string | null) => void;
  type: BrandType;
}

export const ChooseBrand: FC<IProps> = ({ choosedItemId, onChoose, type }) => {
  const { search, onChangeSearchValue, data, inViewRef, states } =
    useBrands(type);

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col max-w-xs shadow-sm mb-5 bg-white">
      <h2 className="font-medium text-gray-800 mb-3">Выберите бренд</h2>
      <input
        type="text"
        placeholder="Поиск брендов..."
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white"
        value={search}
        onChange={(e) => onChangeSearchValue(e.target.value)}
      />
      <BrandList
        ref={inViewRef}
        data={data}
        choosedItemId={choosedItemId}
        onChoose={onChoose}
        states={states}
      />
    </div>
  );
};
