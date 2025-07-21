import { useMutation, useQueryClient } from '@tanstack/react-query';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { useNotificationActions } from '../../../notifications';
import { signin } from './service';
import { useRouter } from 'next/router';
import { AuthForm } from '@/shared/types/auth.types';
import { useSetAtom } from 'jotai';
import { isAuthAtom } from '@/app/auth.atom';
import { QUERY_KEYS, SERVICE_URLS } from '@/shared/constants';

export const useSignin = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();
  const { push: navigate } = useRouter();
  const setIsAuth = useSetAtom(isAuthAtom);
  const queryClient = useQueryClient();

  const { mutate, ...props } = useMutation<
    ITokens,
    AxiosError<IServerError>,
    AuthForm
  >({
    mutationFn: (data: AuthForm) => signin(data),
    onSuccess: (data) => {
      remove('info');
      setIsAuth(true);
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.user, QUERY_KEYS.me],
      });
      localStorage.setItem('accessToken', data.access_token);
      addSuccess({
        callbackFn: () => navigate('/'),
        duration: 3000,
      });

      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.user, QUERY_KEYS.me],
      });
    },
    onError: (res) => {
      remove('info');
      addError({ message: res.response?.data.detail, duration: 3000 });
    },
  });

  const handleMutate = (data: AuthForm) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
