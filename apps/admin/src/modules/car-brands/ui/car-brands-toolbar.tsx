import { FC } from 'react';

interface IProps {
  onAddBrand: () => void;
  onChangeSearchValue: (e: string) => void;
  search: string;
}

export const CarBrandsToolbar: FC<IProps> = ({
  search,
  onAddBrand,
  onChangeSearchValue,
}) => {
  return (
    <div className="mb-5 flex flex-col sm:flex-row sm:justify-between">
      <input
        type="text"
        onChange={(e) => onChangeSearchValue(e.target.value)}
        value={search}
        placeholder="Поиск брендов..."
        className="px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full sm:w-[30%] mb-2"
      />
      <button
        onClick={() => onAddBrand()} // Сброс выбранного бренда для создания нового
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
      >
        + Добавить Бренд
      </button>
    </div>
  );
};
