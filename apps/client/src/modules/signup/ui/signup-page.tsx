import { SignupForm } from "./signup-form";

export const SignupPage = () => {
  return (
    <div className="mt-5 flex items-center justify-center p-4">
      <div className="basis-[400px]">
        <h3 className='mb-9 text-xl'>Регистрация</h3>
        <SignupForm />
      </div>
    </div>
  );
};
