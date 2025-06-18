import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
// import { ChooseCondition } from './choose-condition'; mb in the future
import { ChooseFuel } from './choose-fuel';
import { ChooseBody } from './choose-body';
import { ChooseGearbox } from './choose-gearbox';
import { ChooseCountItems } from './choose-count-items';
import { ChoosePrintedStatus } from './choose-printed-status';
import { ChooseBrand } from './brand';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarPartsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {


  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
        <ChooseBrand />
        <ChooseCountItems />
        <ChoosePrintedStatus />
        <ChooseFuel />
        <ChooseBody />
        <ChooseGearbox />
      </div>
    </Drawer>
  );
};
