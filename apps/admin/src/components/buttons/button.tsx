import { FC } from 'react';

const variants = {
  blue: 'bg-blue-500 text-white rounded hover:bg-blue-600',
  default: 'px-3 py-2 border rounded-lg hover:bg-gray-50',
};

type Props = {
  variant?: keyof typeof variants;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: FC<Props> = ({
  onClick,
  children,
  variant = 'blue',
  ...props
}) => {
  return (
    <button
      {...props}
      onClick={onClick}
      className={`px-4 py-2 ${variants[variant]} transition-colors`}
    >
      {children}
    </button>
  );
};
