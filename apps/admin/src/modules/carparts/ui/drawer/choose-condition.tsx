import { useSetAtom } from 'jotai';
import { conditionAtom } from '../../model/store-page';
import { ProductCondition } from '@autoball-frontend/shared-types';

export const ChooseCondition = () => {
  const setCondition = useSetAtom(conditionAtom);

  return (
    <div className="border border-gray-300 rounded-md p-3 flex flex-col max-w-xs">
      <label className="mb-2 text-sm font-medium text-gray-700">
        Выберите состояние
      </label>
      <select
        onChange={(e) => {
          const value = e.target.value as ProductCondition 
          console.log(value)
          setCondition(value);
        }}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="new">Новые</option>
        <option value="used">Б/У</option>
      </select>
    </div>
  );
};
