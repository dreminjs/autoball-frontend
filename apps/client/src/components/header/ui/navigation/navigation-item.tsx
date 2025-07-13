import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  to: string;
  content: string;
}

export const NavigationItem: FC<IProps> = ({ to, content }) => {
  return (
    <li className='text-white p-5'>
      <Link href={to}>{content}</Link>
    </li>
  );
};
