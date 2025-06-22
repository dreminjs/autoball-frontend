import { Outlet } from 'react-router-dom';
import { Container } from '../container';
import { Header } from '../header/ui';
import { MenuDrawer } from '../drawer/ui/menu-drawer';
import { NotificationProvider } from '../../modules/notifications/ui/notification.provider';

export const Layout = () => {
  return (
    <>
      <NotificationProvider />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <MenuDrawer />
    </>
  );
};
