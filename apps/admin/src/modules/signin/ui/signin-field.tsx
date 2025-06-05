import { UseFormRegister } from "react-hook-form";
import { ISigninForm } from "../model/types/signin.interface";


export const SigninField = ({
  label,
  type,
  placeholder,
  message,
  register
}: {
  label: "email" | "пароль"
  type: keyof ISigninForm;
  placeholder?: string;
  message?: string;
  register: UseFormRegister<ISigninForm>
}) => {
  return (
    <fieldset className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        {...register(type)}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 ${
          message
            ? "border-red-300 focus:ring-red-200"
            : "border-gray-300 focus:ring-blue-200"
        }`}
      />
      {message && <p className="mt-1 text-sm text-red-600">{message}</p>}
    </fieldset>
  );
};