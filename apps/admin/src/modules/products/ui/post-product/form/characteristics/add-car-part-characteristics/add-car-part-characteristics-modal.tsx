import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { FC, useState } from 'react';
import TabContext from '@mui/lab/TabContext';
import { CustomTabs } from './tabs';
import { CarBrandsTab } from './car-brands/car-brands-tab';

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
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
          backgroundColor: 'white',
          borderRadius: 2,
        }}
      >
        <TabContext value={tab}>
          <CustomTabs value={tab} onChange={(_, newTab) => setTab(newTab)} />
          <CarBrandsTab currentTab="1" />
        </TabContext>
      </Box>
    </Modal>
  );
};
