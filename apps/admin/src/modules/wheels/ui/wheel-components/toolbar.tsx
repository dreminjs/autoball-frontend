import { FC } from 'react';
import { Button } from '../../../../components/buttons';
import { useSetAtom } from 'jotai';
import { isPostWheelComponentBrandModalVisibleAtom } from '../../model/atoms';
import { getComponentBrandType } from '../../../../shared/lib/get-component-brand-type';
import { QUERY_KEYS } from '../../../../shared/constants';

interface IProps {
  onChangeSearchValue: (e: string) => void;
  search: string;
}
const LABELS: Record<typeof QUERY_KEYS.tire | typeof QUERY_KEYS.disc, string> = {
  disc: "Диски",
  tire: "Шины"
}

export const Toolbar: FC<IProps> = ({ search, onChangeSearchValue }) => {
  const setIsPostWheelComponentModalVisible = useSetAtom(
    isPostWheelComponentBrandModalVisibleAtom
  );

  const componentType = getComponentBrandType() as unknown as keyof typeof LABELS

  return (
    <div>
      <h3 className='text-2xl mb-5 underline'>
        {LABELS[componentType]}
      </h3>
      <div className="mb-5 flex flex-col sm:flex-row sm:justify-between">
        <input
          type="text"
          onChange={(e) => onChangeSearchValue(e.target.value)}
          value={search}
          placeholder="Поиск брендов..."
          className="px-4 py-2 border-b border-gray-300 focus:outline-none focus:border-blue-500 transition-colors duration-200 w-full sm:w-[40%] mb-2"
        />
        <Button
          variant="blue"
          onClick={() => setIsPostWheelComponentModalVisible(true)}
        >
          Добавить Бренд
        </Button>
      </div>
    </div>
  );
};
