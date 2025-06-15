import Drawer from '@mui/material/Drawer';
import { FC, useState } from 'react';
// import { ChooseCondition } from './choose-condition';
import { ChooseFuel } from './choose-fuel';
import { ChooseBody } from './choose-body';
import { ChooseGearbox } from './choose-gearbox';
import { ChooseCountItems } from './choose-count-items';
import { ChoosePrintedStatus } from './choose-printed-status';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarPartsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {

  const [choosedBrandId, setChoosedBrandId] = useState<string | null>(null);

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
        <ChooseCountItems />
        <ChoosePrintedStatus />
        { /* <ChooseCondition /> */ }
        <ChooseFuel />
        <ChooseBody />
        <ChooseGearbox />
      </div>
    </Drawer>
  );
};
