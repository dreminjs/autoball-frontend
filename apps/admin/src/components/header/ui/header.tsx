import logo from '../../../assets/autoball-logo.png';
import { useSetAtom } from 'jotai';
import { Navigation } from './nav/nav';
import { mobileMenuVisibleAtom } from '../../../store/menu.atom';
import { Container } from '../../container';
import { useUserStore } from '../../../store/user.store';

export const Header = () => {

  const { user } = useUserStore()

  const setMenuDrawerVisible = useSetAtom(mobileMenuVisibleAtom)

  return (
    <header className="py-4 bg-gradient-to-r from-[#e6f0f7] to-[#d4e3ed] text-[#2d3748] mb-5 print:hidden">
      <Container className="flex items-center justify-between gap-5">
        <img src={logo} alt={'autoball logo'} className="w-[55px] h-[55px] md:w-[70px] md:h-[70px]" />
        {user && <Navigation />}
        <button onClick={() => setMenuDrawerVisible(true)} className="block sm:hidden">
          <img
            src="/icon-menu.svg"
            className="w-[50px] h-[50px]"
            alt="menu-burger"
          />
        </button>
      </Container>
    </header>
  );
};
