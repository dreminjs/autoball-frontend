import { useMutation, useQueryClient } from '@tanstack/react-query';
import { index } from './service';
import { ISigninForm } from '../types/signin.interface';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/types/server-error';
import { useNotificationActions } from '../../../notifications';
import { useNavigate } from 'react-router-dom';
import { QUERY_KEYS, SERVICE_URLS } from '../../../../shared/constants';

export const useSignin = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const { mutate, ...props } = useMutation<
    ITokens,
    AxiosError<IServerError>,
    ISigninForm
  >({
    mutationFn: (data: ISigninForm) => index(data),
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.access_token);
      remove('info');
      addSuccess({
        duration: 2000,
      });
      queryClient.invalidateQueries({
        queryKey: [SERVICE_URLS.user, QUERY_KEYS.me],
      });
      navigate('/product');
    },
    onError: (res) => {
      remove('info');
      addError({ message: res.response?.data.detail, duration: 3000 });
    },
  });

  const handleMutate = (data: ISigninForm) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
