import { SigninForm } from './signin-form';

export const SigninPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="basis-[400px]">
        <h3 className='mb-9 text-xl'>Вход в Админ Панель.</h3>
        <SigninForm />
      </div>
    </div>
  );
};
