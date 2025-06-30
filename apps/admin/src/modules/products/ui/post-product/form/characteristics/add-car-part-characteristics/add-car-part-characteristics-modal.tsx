import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { CustomTabs } from './tabs';
import { CarBrandsTab } from './car-brands-tab';
import { CarPartsTab } from './car-parts-tab';
import { CarSeriesTab } from './car-series-tab';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AddCarPartCharacteristicsModal: FC<IProps> = ({
  isOpen,
  onClose,
}) => {
  const [tab, setTab] = useState<'1' | '2' | '3'>('1');

  return (
    <Modal onClose={onClose} open={isOpen}>
      <div className='w-[500px] mx-auto mt-40 bg-white p-5 rounded'>
        <TabContext value={tab}>
          <CustomTabs value={tab} onChange={(_, newTab) => setTab(newTab)} />
          <CarPartsTab currentTab="1" />
          <CarBrandsTab currentTab="2" />
          <CarSeriesTab currentTab="3" />
        </TabContext>
      </div>
    </Modal>
  );
};
