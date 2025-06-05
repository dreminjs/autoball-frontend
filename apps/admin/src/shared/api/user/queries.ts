import { useQuery } from '@tanstack/react-query';
import { ApiOperationState } from '../../interfaces/api-operation-state.interface';
import { IUser } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../interfaces/server-error';
import { getMe } from './services';
import { QUERY_KEYS } from '../../constants';

export const useGetMe = (): { data?: IUser } & ApiOperationState => {
  const { 
    isError, 
    isSuccess, 
    isLoading: isPending, 
    error, 
    data 
  } = useQuery<IUser, AxiosError<IServerError>>({
    queryKey: [QUERY_KEYS.me], 
    queryFn: () => getMe(), 
    retry: false,
    refetchOnWindowFocus: false, 
  });

  return {
    data,
    isError,
    isSuccess,
    isPending,
    error: error || null,
  };
};
