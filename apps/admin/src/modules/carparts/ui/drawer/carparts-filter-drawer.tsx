import Drawer from '@mui/material/Drawer';
import { FC, useState } from 'react';
import { ChooseCondition } from './choose-condition';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarPartsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {

  const [choosedBrandId, setChoosedBrandId] = useState<string | null>(null);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
        <ChooseCondition />
      </div>
    </Drawer>
  );
};
