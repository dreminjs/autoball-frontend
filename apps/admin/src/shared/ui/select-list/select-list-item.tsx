import { FC } from "react";

interface IProps {
    id: string | null
    name: string
}

export const SelectListItem: FC<IProps> = ({ id, name }) => {
  return (
    <li
      className={`px-3 py-2 mb-2 rounded-md cursor-pointer transition-colors bg-gray-50 hover:text-blue-600 hover:bg-blue-100`}
    >
      {name}
    </li>
  );
};
