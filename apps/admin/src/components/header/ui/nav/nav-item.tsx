import { FC, useEffect, useRef, useState } from 'react';
import { INavItem } from '../../model/types/nav-item';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSetAtom } from 'jotai';
import { mobileMenuVisibleAtom } from '../../../../store/menu.atom';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SelectNavItems } from './select-nav-items';

type Props = INavItem;

export const NavItem: FC<Props> = ({ to, name, inner }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const setIsMobileMenuVisible = useSetAtom(mobileMenuVisibleAtom);
  const location = useLocation();
  const dropdownRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const isActive =
    useLocation().pathname === `/${to}` ? 'text-blue-600 bg-blue-50' : '';

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const toggleIsMobileMenuVisibility = () =>
    setIsMobileMenuVisible((prev) => !prev);

  return (
    <li className="mb-[25px] sm:m-0 relative" ref={dropdownRef}>
      {to ? (
        <Link
          to={to}
          onClick={() => toggleIsMobileMenuVisibility()}
          className={`px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 ${isActive} transition-all text-[16px] md:text-xl`}
        >
          {name}
        </Link>
      ) : (
        <div className="flex flex-col">
          <button
            onClick={toggleDropdown}
            className={`px-3 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all text-[16px] md:text-xl flex items-center gap-1 ${
              inner?.some((item) => location.pathname === `/${item.to}`)
                ? 'text-blue-600 bg-blue-50'
                : ''
            }`}
          >
            {name}
            {inner &&
              (isDropdownOpen ? (
                <ChevronUp size={18} />
              ) : (
                <ChevronDown size={18} />
              ))}
          </button>
          {inner?.length > 0 && isDropdownOpen && (
            <SelectNavItems
              inner={inner}
              toggleIsMenuVisibility={toggleIsMobileMenuVisibility}
              toggleIsDropdownOpen={toggleDropdown}
            />
          )}
        </div>
      )}
    </li>
  );
};
