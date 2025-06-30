import { FC } from 'react';

type TValue = string | number | null

interface IProps {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: TValue; title: string }[];
  value: TValue;
}

export const Select: FC<IProps> = ({ label, onChange, options, value }) => {
  return (
    <div className="border border-gray-300 rounded-md p-3 flex flex-col max-w-xs mb-5">
      <label className="mb-2 text-sm font-medium text-gray-700">{label}</label>
      <select
        onChange={onChange}
        value={String(value) || 'not-matter'}
        className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
      >
        {typeof options[0].value != 'number' && (
          <option value="not-matter">Не важно</option>
        )}

        {options.map((option, idx) => (
          <option key={idx} value={String(option.value)}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};
