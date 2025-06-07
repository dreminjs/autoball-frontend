import logo from '../../../assets/autoball-logo.png';
import { useAtomValue, useSetAtom } from 'jotai';
import { Navigation } from './nav/nav';
import Container from '@mui/material/Container';
import { authAtom } from '../../../store/auth.atom';
import { mobileMenuVisibleAtom } from '../../../store/menu.atom';

export const Header = () => {
  const isAuth = useAtomValue(authAtom);

  const setMenuDrawerVisible = useSetAtom(mobileMenuVisibleAtom)

  return (
    <header className="py-4 bg-[#bcd6e5] mb-5">
      <Container className="flex items-center justify-between">
        <img src={logo} alt={'autoball logo'} className="w-[75px] h-[75px] md:w-[100px] md:h-[100px]" />
        {!isAuth && <Navigation />}
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
