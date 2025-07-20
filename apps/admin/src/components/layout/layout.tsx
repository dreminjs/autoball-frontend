import { Outlet } from 'react-router-dom';
import { Container } from '../container';
import { Header } from '../header/ui/header';
import { MenuDrawer } from '../drawer/ui/menu-drawer';
import { NotificationProvider } from '../../modules/notifications/ui/notification.provider';
import { ProtectedRoutes } from '../../providers/protected-routes';

export const Layout = () => {
  return (
    <ProtectedRoutes>
      <NotificationProvider />
      <Header />
      <Container>
        <Outlet />
      </Container>
      <MenuDrawer />
    </ProtectedRoutes>
  );
};
