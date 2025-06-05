import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="min-h-screen w-[75%] mx-auto">
      <Outlet />
    </div>
  );
};
