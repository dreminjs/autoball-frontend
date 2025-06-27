import { ICarBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';

const icon = (
  <svg
    className="w-5 h-5 text-blue-500"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5 13l4 4L19 7"
    />
  </svg>
);

type IProps = {
  choosedBrandId: string | null;
  currentBrand: ICarBrand | null;
  onChoose: (data: null | string) => void;
};

export const ListItem: FC<IProps> = ({
  choosedBrandId,
  currentBrand,
  onChoose,
}) => {
  const isSelected = choosedBrandId === currentBrand?.id || currentBrand === null

  const handleClick = () => {
    currentBrand && onChoose(isSelected ? null : currentBrand?.id);
  };

  return (
    <li
      className={`px-4 py-3 mb-1.5 cursor-pointer rounded-lg transition-all duration-200
        ${
          isSelected 
            ? 'bg-blue-100 border border-blue-300 text-blue-700 font-medium'
            : 'bg-white hover:bg-blue-50 border border-transparent text-gray-700'
        }
        active:scale-[0.98]`}
      onClick={handleClick}
    >
      <div className="flex items-center justify-between">
        <span className="truncate">{currentBrand?.name ? currentBrand?.name : "Не важно"}</span>
        {isSelected && icon}
      </div>
    </li>
  );
};
