import { useState } from 'react';
import { List } from './list';
import { useGetCarBrands } from '../../../../../car-brands/api/queries';

export const ChooseBrand = () => {
  const [search, setSearch] = useState('');

  const { data } = useGetCarBrands({ search, limit: 10 });

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex flex-col max-w-xs shadow-sm mb-5">
      <h2 className="font-medium text-gray-800 mb-3">Выберите бренд</h2>

      <input
        type="text"
        placeholder="Поиск брендов..."
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <List data={data} />
    </div>
  );
};
