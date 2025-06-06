import { FC } from 'react';
import { items } from '../../model/data';
import { NavItem } from './nav-item';

interface IProps {
  ulClassName?: string;
  navClassName?: string
}

export const Navigation: FC<IProps> = ({
  ulClassName = 'hidden sm:flex items-center gap-5',
  navClassName,
}) => {
  return (
    <nav className={navClassName}>
      <ul className={ulClassName}>
        {items.map((item) => (
          <NavItem {...item} />
        ))}
        <li>
          <button className='text-lg sm:text-base'>Выйти</button>
        </li>
      </ul>
    </nav>
  );
};
