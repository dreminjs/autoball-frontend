import { FC } from 'react';
import { Button } from '../../../components/buttons';

interface IProps {
  brandName: string | null;
  onOpenPostSeriesModal: () => void;
}

export const Toolbar: FC<IProps> = ({ brandName, onOpenPostSeriesModal }) => {
  return (
    <div className="border-b-2 mb-5 flex justify-between pb-5">
      <h1 className="text-4xl ">{brandName || 'Не определено'}</h1>
      <Button onClick={() => onOpenPostSeriesModal()}>Добавить Серию</Button>
    </div>
  );
};
