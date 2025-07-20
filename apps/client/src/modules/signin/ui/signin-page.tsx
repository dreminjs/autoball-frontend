import { SigninForm } from "./signin-form";

export const SigninPage = () => {
  return (
    <div className="mt-5 flex items-center justify-center p-4">
      <div className="basis-[400px]">
        <h3 className='mb-9 text-xl'>Вход</h3>
        <SigninForm />
      </div>
    </div>
  );
};
