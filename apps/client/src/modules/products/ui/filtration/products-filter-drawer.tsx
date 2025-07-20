import Drawer from '@mui/material/Drawer';
import { FC } from 'react';
import { FiltrationCategories } from './filtration-categories';

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ProductsFilterDrawer: FC<IProps> = ({ isOpen, onClose }) => {

  return (
    <Drawer open={isOpen} onClose={onClose}>
      <div className="px-[50px] py-5">
       <FiltrationCategories />
      </div>
    </Drawer>
  );
};
