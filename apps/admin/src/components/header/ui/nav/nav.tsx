import { FC } from 'react';
import { items } from '../../model/data';
import { NavItem } from './nav-item';
import { LogoutButton } from './logout-button';

interface IProps {
  ulClassName?: string;
  navClassName?: string;
}

export const Navigation: FC<IProps> = ({
  ulClassName = 'hidden sm:flex items-center gap-5',
  navClassName,
}) => (
  <nav className={navClassName}>
    <ul className={`${ulClassName} relative`}>
      {items.map((item, idx) => (
        <NavItem key={idx} {...item} />
      ))}
      <li>
        <LogoutButton />
      </li>
    </ul>
  </nav>
);
