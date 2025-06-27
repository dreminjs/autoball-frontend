import { useMutation } from '@tanstack/react-query';
import { index } from './service';
import { ISigninForm } from '../types/signin.interface';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/interfaces/server-error';
import { useNotificationActions } from '../../../notifications';
import { useNavigate } from 'react-router-dom';
import { PAGE_URLS } from '../../../../shared/constants';

export const useSignin = () => {
  const { addError, addSuccess, remove, addInfo } = useNotificationActions();

  const navigate = useNavigate()

  const { mutate, ...props } = useMutation<
    ITokens,
    AxiosError<IServerError>,
    ISigninForm
  >({
    mutationFn: (data: ISigninForm) => index(data),
    onSuccess: (data) => {
      remove("info")
      localStorage.setItem('accessToken', data.access_token);
      addSuccess({
        callbackFn: () => navigate(PAGE_URLS.product),
        duration: 3000
      });
    },
    onError: (res) => {
      remove("info")
      addError({ message: res.response?.data.detail, duration: 3000  });
    },
  });

  const handleMutate = (data: ISigninForm) => {
    addInfo();
    mutate(data);
  };

  return { mutate: handleMutate, ...props };
};
