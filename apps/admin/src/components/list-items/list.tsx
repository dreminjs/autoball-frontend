import { FC, ReactNode } from 'react';

interface IProps {
  isPending: boolean;
  isError: boolean;
  empty: boolean;
  error?: string;
  children: ReactNode;
  className?: string
  posistionLoading?: "top" | "bottom"
}

export const List: FC<IProps> = ({ isError, isPending, error, empty, children, className }) => {
  return <ul className={`divide-y divide-gray-200 overflow-y-scroll ${className ? className : ''}`}>
    {isPending && <li className="text-center py-4">Загрузка...</li> } 
    {isError && <li className="text-center py-4 text-red-500">{error}</li> }
    {!isPending && empty && <li className="text-center py-4 text-gray-500">Не найдено</li>}
    {!isPending && children}
  </ul>;
};
