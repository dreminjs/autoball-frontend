import { useForm } from 'react-hook-form';
import { ISigninForm } from '../model/types/signin.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../model/schemas/signin.schema';
import { SigninField } from './signin-field';
import { useSignin } from '../model/api/query';

export const SigninForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<ISigninForm>({
    resolver: zodResolver(signinSchema),
  });

  const { mutate, isPending } = useSignin();

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))}>
      <SigninField
        label={'номер телефона'}
        type={'phone_number'}
        message={errors.phone_number?.message}
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
  );
};
