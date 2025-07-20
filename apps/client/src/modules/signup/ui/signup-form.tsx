import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormField } from '@/components/form-field';
import { TSignupForm } from '../model/signup.type';
import { signupSchema } from '../model/signup.schema';
import { useSignup } from '../model/api/query';

export const SignupForm = () => {
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<TSignupForm>({
    resolver: zodResolver(signupSchema),
  });

  const { mutate, isPending } = useSignup();

  return (
    <form onSubmit={handleSubmit((data) => mutate(data))}>
       <FormField<TSignupForm>
        name="name"
        label={'Ваше имя'}
        type={'name'}
        error={errors.name?.message}
        register={register}
      />
      <FormField<TSignupForm>
        name="phone_number"
        label={'Номер телефона'}
        type={'phone_number'}
        error={errors.phone_number?.message}
        register={register}
      />
      <FormField<TSignupForm>
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
