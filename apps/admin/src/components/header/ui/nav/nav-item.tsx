import { FC } from 'react';
import { INavItem } from '../../model/types/nav-item';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
type Props = INavItem;

export const NavItem: FC<Props> = ({ to, name }) => (
  <li className="mb-[25px] sm:m-0">
    <Link
      to={to}
      className={`px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${
        useLocation().pathname === `/${to}` ? 'text-blue-600 bg-blue-50' : ''
      } transition-all text-lg sm:text-xl`}
    >
      {name}
    </Link>
  </li>
);
