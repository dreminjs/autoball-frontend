import logo from '../../../assets/autoball-logo.png';
import { useSetAtom } from 'jotai';
import { Navigation } from './nav/nav';
import { mobileMenuVisibleAtom } from '../../../store/menu.atom';
import { Container } from '../../container';
import { useAuthStore } from '../../../store/auth.store';

export const Header = () => {

  const { auth } = useAuthStore()

  const setMenuDrawerVisible = useSetAtom(mobileMenuVisibleAtom)

  return (
    <header className="py-4 bg-gradient-to-r from-[#e6f0f7] to-[#d4e3ed] text-[#2d3748] mb-5 print:hidden">
      <Container className="flex items-center justify-between gap-5">
        <img src={logo} alt={'autoball logo'} className="w-[75px] h-[75px] md:w-[100px] md:h-[100px]" />
        {auth && <Navigation />}
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
