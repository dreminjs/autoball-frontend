import { useQuery, useQueryClient } from '@tanstack/react-query';
import { IUser } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../types/server-error';
import { getMe } from './services';
import { QUERY_KEYS } from '../../constants';
import { useEffect } from 'react';
import { useSetAtom } from 'jotai';
import { isAuthAtom } from '@/app/auth.atom';

export const useGetMe = () => {
  const setIsAuth = useSetAtom(isAuthAtom);
  const queryClient = useQueryClient();

  const { isSuccess, refetch, ...states } = useQuery<
    IUser,
    AxiosError<IServerError>
  >({
    queryKey: [QUERY_KEYS.me],
    queryFn: () => getMe(),
  });

  useEffect(() => {
    if (isSuccess && states.data?.id) {
      setIsAuth(true);
      refetch();
    }
  }, [isSuccess, queryClient, refetch, setIsAuth, states.data?.id]);

  return { ...states, isSuccess };
};
