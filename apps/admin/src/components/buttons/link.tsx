import { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

const variants = {
  blue: 'bg-blue-500 text-white rounded hover:bg-blue-600',
  default: 'px-3 py-2 border rounded-lg hover:bg-gray-50',
};

type Props = {
  variant?: keyof typeof variants;
  to: string;
} & PropsWithChildren;

export const CustomLink: FC<Props> = ({
  variant = 'blue',
  to,
  children,
  ...props
}) => {
  return (
    <Link
      to={to}
      {...props}
      className={`px-4 py-2 ${variants[variant]} transition-colors`}
    >
      {children}
    </Link>
  );
};
