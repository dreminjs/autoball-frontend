import { useLocation, useNavigate } from 'react-router-dom';
import { useGetMe } from '../shared/api/user/queries';
import { FC, ReactNode, useEffect } from 'react';
import { PAGE_URLS } from '../shared/constants';
import { useUserStore } from '../store/user.store';

interface IProps {
  children: ReactNode;
}

export const ProtectedRoutes: FC<IProps> = ({ children }) => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const { isError, isSuccess, data: userInfo } = useGetMe();

  const { login } = useUserStore();

  useEffect(() => {
    if (pathname === '/' && isSuccess && userInfo) {
      login(userInfo);
      navigate(PAGE_URLS.product);
    }

    if (isError && !localStorage.getItem("accessToken")) {
      console.log("hello")
      navigate('/');
    }
  }, [userInfo, isError, isSuccess, login, navigate, pathname]);

  return children;
};
