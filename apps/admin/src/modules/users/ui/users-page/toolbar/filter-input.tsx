import { FC } from 'react';

interface IProps {
  label: string;
  onChange: (data: string) => void;
  value: string;
}

export const FilterInput: FC<IProps> = ({ label, onChange, value }) => {
  return (
    <div className="space-y-1">
      <label>{label}</label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={label || 'Search'}
        className="w-full p-1 border-b outline-none focus:border-black"
      />
    </div>
  );
};
