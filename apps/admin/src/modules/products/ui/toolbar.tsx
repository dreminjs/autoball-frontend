import { useAtom, useAtomValue } from 'jotai';
import { FC } from 'react';
import { checkboxesAtom, showScanCheckboxesAtom } from '../model/atoms-page';
import { Button, CustomLink } from '../../../components/buttons';

interface IProps {
  onShowDrawer: () => void;
}

export const Toolbar: FC<IProps> = ({ onShowDrawer }) => {
  const [showScanCheckboxes, setShowScanCheckboxes] = useAtom(
    showScanCheckboxesAtom
  );

  const checkboxes = useAtomValue(checkboxesAtom);

  return (
    <div className="flex gap-2 justify-center flex-wrap mb-5 print:hidden">
      <Button variant="default" onClick={() => onShowDrawer()}>
        Фильтры & Сортировка
      </Button>
      <Button variant="default" onClick={() => window.print()}>
        Распечатать QR коды
      </Button>
      <CustomLink variant="default" to="post">
        Выложить новую запчасть
      </CustomLink>
      {!showScanCheckboxes ? (
        <Button variant="default" onClick={() => setShowScanCheckboxes(true)}>
          Отметить распечатаные товары
        </Button>
      ) : (
        <div className="flex gap-2">
          <Button
            variant="default"
            onClick={() => setShowScanCheckboxes(false)}
            disabled={checkboxes && checkboxes.length < 1}
          >
            Отметить
          </Button>
          <Button
            variant="default"
            onClick={() => setShowScanCheckboxes(false)}
          >
            Отмена
          </Button>
        </div>
      )}
    </div>
  );
};
