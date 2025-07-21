import { useMutation, useQueryClient } from '@tanstack/react-query';
import { index } from './service';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { useNotificationActions } from '../../../notifications';
import { TSignupForm } from '../signup.type';
import { useRouter } from 'next/router';
import { isAuthAtom } from '@/app/auth.atom';
import { useSetAtom } from 'jotai';
import { QUERY_KEYS, SERVICE_URLS } from '@/shared/constants';

export const useSignup = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const { push: navigate } = useRouter();

  const setIsAuth = useSetAtom(isAuthAtom);

  const queryClient = useQueryClient();

  const { mutate, ...props } = useMutation<
    ITokens,
    AxiosError<IServerError>,
    TSignupForm
  >({
    mutationFn: (data: TSignupForm) => index(data),
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
    },
    onError: (res) => {
      remove('info');
      addError({ message: res.response?.data.detail, duration: 3000 });
    },
  });

  const handleMutate = (data: TSignupForm) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
