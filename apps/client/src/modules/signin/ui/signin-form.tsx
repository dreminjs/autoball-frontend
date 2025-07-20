import { useForm } from 'react-hook-form';
import { ISigninForm } from '../model/types/signin.interface';
import { zodResolver } from '@hookform/resolvers/zod';
import { signinSchema } from '../model/schemas/signin.schema';
import { useSignin } from '../model/api/query';
import { FormField } from '@/components/form-field';

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
      <FormField<ISigninForm>
        name="phone_number"
        label={'Номер телефона'}
        type={'phone_number'}
        error={errors.phone_number?.message}
        register={register}
      />
      <FormField<ISigninForm>
        name="password"
        label={'Пароль'}
        type={'password'}
        error={errors.password?.message}
        register={register}
      />
      <button type="submit" className="border-2 px-5 py-1 rounded-xl">
        {isPending ? 'Loading...' : 'вход'}
      </button>
    </form>
  );
};
