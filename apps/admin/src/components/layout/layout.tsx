import { Outlet } from 'react-router-dom';
import { Header } from '../header';
import { Container } from '../container';

export const Layout = () => {
  return (
    <>
      <Header />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};
