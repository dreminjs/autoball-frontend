import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMe } from '../shared/api/user/queries';
import { FC, ReactNode, useEffect } from 'react';
import { PAGE_URLS } from '../shared/constants';

interface IProps {
  children: ReactNode;
}

export const ProtectedRoutes: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { isError, isSuccess } = useGetMe();

  useEffect(() => {
    if (isError) {
      navigate('/');
    }
    if (pathname === '/' && isSuccess) {
      navigate(PAGE_URLS.product);
    }
  
  }, [isError, isSuccess, navigate, pathname]);

  return children;
};
