import { FC } from 'react';

interface IProps {
  onShowDrawer: () => void;
  onSearch: (value: string) => void;
  search: string;
}

export const Toolbar: FC<IProps> = ({ onSearch, onShowDrawer, search }) => {
  return (
    <div className="flex gap-2 max-w-[65%]">
      <div className="relative flex-1">
        <input
          type="text"
          onChange={(e) => onSearch(e.target.value)}
          defaultValue={search}
          placeholder="Поиск..."
          className="w-full px-3 py-2 border rounded focus:outline-none focus:border-blue-400"
        />
      </div>

      <button
        onClick={() => onShowDrawer()}
        className="px-3 py-2 border rounded hover:bg-gray-50"
      >
        Фильтры
      </button>
    </div>
  );
};
