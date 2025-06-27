import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
import { ChooseFuel } from './choose-fuel';
import { ChooseBody } from './choose-body';
import { ChooseGearbox } from './choose-gearbox';
import { ChooseCountItems } from './choose-count-items';
import { ChoosePrintedStatus } from './choose-printed-status';
import { ChooseBrand } from '../../../../car-brands';
import { useChooseCarBrand } from '../../../model/hooks/use-choose-car-brand';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CarPartsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {
  const { onChooseBrand, brandId } = useChooseCarBrand();

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
        <ChooseBrand choosedItemId={brandId} onChoose={onChooseBrand} type={'car'} />
        <ChooseCountItems />
        <ChoosePrintedStatus />
        <ChooseFuel />
        <ChooseBody />
        <ChooseGearbox />
      </div>
    </Drawer>
  );
};
