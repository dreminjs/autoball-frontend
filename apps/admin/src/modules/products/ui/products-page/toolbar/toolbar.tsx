import { FC } from 'react';
import { Button, CustomLink } from '../../../../../components/buttons';
import { ToggleStatues } from './statuses/toggle-statuses';

interface IProps {
  onShowDrawer: () => void;
}

export const Toolbar: FC<IProps> = ({ onShowDrawer }) => {
  return (
    <div className="flex gap-2 flex-col items-center mb-5 print:hidden">
      <div className="flex gap-2 ">
        <Button variant="default" onClick={() => onShowDrawer()}>
          Фильтры & Сортировка
        </Button>
        <Button variant="default" onClick={() => window.print()}>
          Распечатать QR коды
        </Button>
        <CustomLink variant="default" to="post">
          Выложить новую запчасть
        </CustomLink>
      </div>
      <ToggleStatues />
    </div>
  );
};
