import { useMutation } from '@tanstack/react-query';
import { index } from './service';
import { ISigninForm } from '../types/signin.interface';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';
import { IServerError } from '../../../../shared/interfaces/server-error';
import { ApiOperationState } from '../../../../shared/interfaces/api-operation-state.interface';

export const useSignin = (): {
  mutate: (data: ISigninForm) => void;
} & ApiOperationState => {
  const { mutate, isSuccess, isError, isPending, error } = useMutation<
    ITokens,
    AxiosError<IServerError>,
    ISigninForm
  >({
    mutationFn: (data: ISigninForm) => index(data),
    onSuccess: (data) => localStorage.setItem('accessToken', data.access_token),
  });

  return { mutate, isSuccess, isError, isPending, error: error || null };
};
