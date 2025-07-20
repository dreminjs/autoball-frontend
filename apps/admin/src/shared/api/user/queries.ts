import { useQuery } from '@tanstack/react-query';
import { ApiOperationState } from '../../types/api-operation-state.interface';
import { IUser } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../types/server-error';
import { getMe } from './services';
import { QUERY_KEYS, SERVICE_URLS } from '../../constants';
import { useEffect } from 'react';
import { useUserStore } from '../../../store/user.store';

export const useGetMe = (): { data?: IUser } & ApiOperationState => {
  const { login, logout } = useUserStore();

  const {
    isError,
    isSuccess,
    isLoading: isPending,
    error,
    data,
  } = useQuery<IUser, AxiosError<IServerError>>({
    queryKey: [SERVICE_URLS.user, QUERY_KEYS.me],
    queryFn: () => getMe(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      login(data);
    }
    if (isError) {
      logout();
    }
  }, [isSuccess, isError, login, logout, data]);

  return {
    data,
    isError,
    isSuccess,
    isPending,
    error: error || null,
  };
};
