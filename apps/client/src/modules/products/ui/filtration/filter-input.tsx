import { FC } from 'react';

interface IProps {
  label: string;
  value: string | number
  onChange: (data: string | number) => void;
  error?: string;
  type: React.HTMLInputTypeAttribute;
}

export const FilterInput: FC<IProps> = ({ label, value, onChange, type }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={`${label}-id`}
        className="block mb-1 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={`${label}-id`}
        {...{ type, defaultValue: value }}
        onChange={(e) => onChange(e.currentTarget.value)}
        className="w-full px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
};
