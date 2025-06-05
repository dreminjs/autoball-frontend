import { useForm } from 'react-hook-form';
import { ISigninForm } from '../model/types/signin.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../model/schemas/signin.schema';
import { SigninField } from './signin-field';
import { useSignin } from '../model/api/query';
import { ResponseModal } from '../../../components';

const message = {
  pending: 'Вход в систему...',
  success: 'Вход выполнен успешно!',
};

export const SigninForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISigninForm>({
    resolver: zodResolver(signinSchema),
  });

  const { mutate, isError, isPending, isSuccess, error } = useSignin();


  
  return (
    <>
      <form onSubmit={handleSubmit((data) => mutate(data))}>
        <SigninField
          label={'email'}
          type={'email'}
          message={errors.email?.message}
          register={register}
        />
        <SigninField
          label={'пароль'}
          type={'password'}
          message={errors.password?.message}
          register={register}
        />
        <button type="submit" className="border-2 px-5 py-1 rounded-xl">
          {isPending ? 'Loading...' : 'вход'}
        </button>
      </form>
      <ResponseModal
        message={{ ...message, error: error?.response?.data.detail }}
        isOpen={isPending || isSuccess || isError}
        states={{ isPending, isSuccess, isError }}
      />
    </>
  );
};
