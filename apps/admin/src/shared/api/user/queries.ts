import { useQuery } from '@tanstack/react-query';
import { ApiOperationState } from '../../interfaces/api-operation-state.interface';
import { IUser } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../interfaces/server-error';
import { getMe } from './services';
import { QUERY_KEYS } from '../../constants';
import { useEffect } from 'react';
import { useAuthStore } from '../../../store/auth.store';

export const useGetMe = (): { data?: IUser } & ApiOperationState => {
  const { login, logout } = useAuthStore();

  const {
    isError,
    isSuccess,
    isLoading: isPending,
    error,
    data,
  } = useQuery<IUser, AxiosError<IServerError>>({
    queryKey: [QUERY_KEYS.me],
    queryFn: () => getMe(),
    retry: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    if (isSuccess) {
      login();
    }
    if (isError) {
      logout();
    }
  }, [isSuccess, isError, login, logout]);

  return {
    data,
    isError,
    isSuccess,
    isPending,
    error: error || null,
  };
};
