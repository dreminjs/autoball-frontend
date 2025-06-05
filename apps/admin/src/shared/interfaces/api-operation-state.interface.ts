import { AxiosError } from 'axios';
import { IServerError } from './server-error';

export interface ApiOperationState<TError = AxiosError<IServerError>> {
  isSuccess: boolean;
  isError: boolean;
  isPending: boolean;
  error: TError | null;
}
