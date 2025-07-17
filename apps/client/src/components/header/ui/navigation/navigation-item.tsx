import { isMenuDrawerOpenAtom } from '@/modules/products/model/menu-drawer.atom';
import { useSetAtom } from 'jotai';
import Link from 'next/link';
import { FC } from 'react';

interface IProps {
  to: string;
  content: string;
}

export const NavigationItem: FC<IProps> = ({ to, content }) => {
  const setIsMenuDrawerOpen = useSetAtom(isMenuDrawerOpenAtom)

  return (
    <li onClick={() => setIsMenuDrawerOpen(false)} className='text-white p-5'>
      <Link href={to}>{content}</Link>
    </li>
  );
};
