import Drawer from '@mui/material/Drawer';
import { useAtom } from 'jotai';
import { mobileMenuVisibleAtom } from '../../../store/menu.atom';
import { Navigation } from '../../header/ui/nav/nav';
import logo from '../../../assets/autoball-logo.png';

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
      <div className='p-7'>
        <img src={logo} alt={'autoball logo'} className="w-[75px] h-[75px] md:w-[100px] md:h-[100px] mx-auto" />

        <Navigation navClassName='p-[20px]' ulClassName='flex flex-col items-center' />
      </div>
    </Drawer>
  );
};
