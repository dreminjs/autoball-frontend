import { FC } from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { PhonesItem } from './phones-item';

interface Props {
  isOpen: boolean;
  anchorEl: HTMLElement | null;
  onClose: () => void;
}

export const PhonesMenu: FC<Props> = ({ isOpen, anchorEl, onClose }) => {
  return (
    <Menu id="basic-menu" anchorEl={anchorEl} open={isOpen} onClose={onClose}>
      <MenuItem onClick={onClose}>
        <PhonesItem
          tag="div"
          content={'+375(29)917-00-70'}
          messagers={['viber']}
        />
      </MenuItem>
      <MenuItem onClick={onClose}>
        <PhonesItem
          tag="div"
          content={'+375(33)331-99-11'}
          messagers={['viber', 'whatsapp']}
        />
      </MenuItem>
      <MenuItem onClick={onClose}>
        <PhonesItem
          tag="div"
          content={'+375(29)879-47-94'}
          messagers={['whatsapp']}
        />
      </MenuItem>
    </Menu>
  );
};
