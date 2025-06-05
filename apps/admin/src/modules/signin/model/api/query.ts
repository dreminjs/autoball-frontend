import { useMutation,} from '@tanstack/react-query';
import { index } from './service';
import { ISigninForm } from '../types/signin.interface';
import { ITokens } from '@autoball-frontend/shared-types';
import { AxiosError } from 'axios';


export const useSignin = (): {
  mutate: (data: ISigninForm) => void;
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  error: AxiosError<{ detail: string }> | null;
} => {
  const { mutate, isSuccess, isError, isPending, error } = useMutation<
    ITokens,
    AxiosError<{ detail: string }>,
    ISigninForm
  >({
    mutationFn: (data: ISigninForm) => index(data),
    onSuccess: () => console.log('error'),
  });

  return { mutate, isSuccess, isError, isPending, error: error || null };
};