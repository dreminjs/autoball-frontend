import { FC } from "react";



interface IProps {
  label: string;
  value: string | number
}

export const SpecItem: FC<IProps> = ({ label, value }) => {

  return (
    <div className="mb-2">
      <span className="text-sm text-gray-500 block">{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
};
