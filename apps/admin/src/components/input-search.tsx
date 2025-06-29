import { FC } from 'react';

interface IProps {
  search: string;
  onChange: (data: string) => void;
}

export const InputSearch: FC<IProps> = ({ search, onChange }) => {
  return (
    <input
      type="text"
      placeholder="Поиск..."
      className="px-2 py-2 border w-full mb-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-white"
      value={search}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};
