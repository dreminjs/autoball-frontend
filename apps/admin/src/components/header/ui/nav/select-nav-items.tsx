import { FC } from 'react';
import { Link } from 'react-router-dom';

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
  return (
    <ul className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-md py-1 min-w-[160px] z-50">
      {inner.map((item) => (
        <li key={item.to}>
          <Link
            to={item.to}
            onClick={() => {
              toggleIsDropdownOpen();
              toggleIsMenuVisibility();
            }}
            className="block px-4 py-2 hover:bg-blue-50 hover:text-blue-600 transition-colors"
          >
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};
