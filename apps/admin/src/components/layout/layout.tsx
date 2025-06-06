import { Outlet } from 'react-router-dom';
import { Container } from '../container';
import { Header } from '../header/ui';
import { MenuDrawer } from '../drawer/ui/menu-drawer';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
      <MenuDrawer />
    </>
  );
};
