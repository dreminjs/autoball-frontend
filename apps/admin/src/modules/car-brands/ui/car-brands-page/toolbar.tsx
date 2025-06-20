import { FC } from 'react';
import { Button } from '../../../../components/buttons';
import { useSetAtom } from 'jotai';
import { isPostCarBrandModalVisibleAtom } from '../../model/atoms';

interface IProps {
  onChangeSearchValue: (e: string) => void;
  search: string;
}

export const Toolbar: FC<IProps> = ({
  search,
  onChangeSearchValue,
}) => {
    const setIsPostCarBrandModalVisible = useSetAtom(isPostCarBrandModalVisibleAtom)
  

  return (
    <div className="mb-5 flex flex-col sm:flex-row sm:justify-between">
      <input
        type="text"
        onChange={(e) => onChangeSearchValue(e.target.value)}
        value={search}
        placeholder="Поиск брендов..."
        className="px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full sm:w-[40%] mb-2"
      />
      <Button variant="blue" onClick={() => setIsPostCarBrandModalVisible(true)}>Добавить Бренд</Button>
    </div>
  );
};
