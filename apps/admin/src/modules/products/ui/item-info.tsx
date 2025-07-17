import { FC } from 'react';

interface IProps {
  title: string;
  value: string;
  isSelected: boolean
}

export const ItemInfo: FC<IProps> = ({isSelected,title,value}) => (
  <div className="flex items-baseline">
    <span className={`font-medium mr-2 ${
      isSelected ? 'text-blue-600' : 'text-gray-500'
    }`}>
      {title}:
    </span>
    <span className={isSelected ? 'text-blue-800 font-semibold' : 'text-gray-900'}>
      {value}
    </span>
  </div>
);