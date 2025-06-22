import { FC } from 'react';
import { items } from '../../model/data';
import { NavItem } from './nav-item';

interface IProps {
  ulClassName?: string;
  navClassName?: string;
}

export const Navigation: FC<IProps> = ({
  ulClassName = 'hidden md:flex items-center gap-5',
  navClassName,
}) => (
  <nav className={navClassName}>
    <ul className={`${ulClassName} relative`}>
      {items.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
      <li>
        <button className="text-lg md:text-xl">Выйти</button>
      </li>
    </ul>
  </nav>
);
