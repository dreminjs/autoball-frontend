import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
import { ChooseFuel } from './choose-fuel';
import { ChooseBody } from './choose-body';
import { ChooseGearbox } from './choose-gearbox';
import { ChooseCountItems } from './choose-count-items';
import { ChoosePrintedStatus } from './choose-printed-status';
import { ChooseBrand } from './items-list/choose-brand-list/choose-brand';
import { ChooseSeries } from './items-list/choose-series-list/choose-series';
import { ChooseCarPart } from './items-list/choose-car-part/choose-car-part';
import { ChooseYear } from './choose-year/choose-year';
import { ChoosePrice } from './choose-price/choose-price';
import { ChooseAvailability } from './choose-availability';
import { DiscFilter } from './disc/disc-filter';
import { TireFilter } from './tire/tire-filter';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
        <ChooseBrand type={'car'} />
        <ChooseSeries />
        <ChooseCarPart />
        <ChooseYear />
        <ChoosePrice />
        <DiscFilter />
        <TireFilter />
        <ChooseAvailability />
        <ChooseCountItems />
        <ChoosePrintedStatus />
        <ChooseFuel />
        <ChooseBody />
        <ChooseGearbox />
      </div>
    </Drawer>
  );
};
