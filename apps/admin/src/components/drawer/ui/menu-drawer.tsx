import Drawer from '@mui/material/Drawer';
import { useAtom } from 'jotai';
import { mobileMenuVisibleAtom } from '../../../store/menu.atom';
import { Navigation } from '../../header/ui/nav/nav';

export const MenuDrawer = () => {
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useAtom(
    mobileMenuVisibleAtom
  );

  return (
    <Drawer
    className='sm:hidden'
      open={isMobileMenuVisible}
      onClose={() => setIsMobileMenuVisible(false)}
    >
      <div>
        <Navigation navClassName='p-[20px]' ulClassName='flex flex-col items-center' />
      </div>
    </Drawer>
  );
};
