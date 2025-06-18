import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface IProps {
  inner: { name: string; to: string }[];
  toggleIsMenuVisibility: () => void;
  toggleIsDropdownOpen: () => void;
}

export const SelectNavItems: FC<IProps> = ({
  inner,
  toggleIsDropdownOpen,
  toggleIsMenuVisibility,
}) => {
  const location = useLocation();

  return (
    <ul className="pl-4 absolute top-[45px]">
      {inner.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            onClick={() => {
              toggleIsDropdownOpen();
              toggleIsMenuVisibility();
            }}
            className={`block text-center mt-2 px-3 py-2 rounded-lg  hover:bg-blue-50 hover:text-blue-600 ${
              location.pathname === `/${item.to}`
                ? 'text-blue-600 bg-blue-50'
                : ''
            }`}
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
