import { FC } from 'react';
import { Button } from '../../../components/buttons';
import { useSetAtom } from 'jotai';
import { isPostBrandSeriesModalVisibleAtom } from '../model/store-page';

interface IProps {
  brandName: string | null;
}

export const Toolbar: FC<IProps> = ({ brandName }) => {
  const setIsPostBrandSeriesModalVisible = useSetAtom(
    isPostBrandSeriesModalVisibleAtom
  );

  const handleOpen = () => setIsPostBrandSeriesModalVisible(true);

  return (
    <div className="border-b-2 mb-5 flex justify-between pb-5">
      <h1 className="text-4xl ">{brandName || 'Не определено'}</h1>
      <Button variant='blue' onClick={handleOpen}>Добавить Серию</Button>
    </div>
  );
};
