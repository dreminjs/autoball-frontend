import { MenuDrawer } from '@/components/drawer/menu-drawer';
import { Header } from '@/components/header';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren) => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <MenuDrawer />
      <Header />
      <div className="px-5">{props.children}</div>
    </QueryClientProvider>
  );
};
