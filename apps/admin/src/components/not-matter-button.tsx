import { FC } from 'react';

interface IProps {
  onClick: () => void;
}

export const NotMatterButton: FC<IProps> = ({ onClick }) => {
  return (
    <li className="bg-blue-100 border border-blue-300 text-blue-700 font-medium">
      <button {...{ onClick }}>Не важно</button>
    </li>
  );
};
