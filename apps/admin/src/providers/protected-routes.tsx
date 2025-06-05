import { Outlet, useNavigate } from 'react-router-dom';
import { useGetMe } from '../shared/api/user/queries';
import { useEffect } from 'react';

export const ProtectedRoutes = () => {
  const navigate = useNavigate();

  const { data, isSuccess, isError, error } = useGetMe();

  // useEffect(() => {
  //   if (!isError) {
  //     navigate('/');
  //   }
  // }, [isError, navigate]);

  return <Outlet />;
};
