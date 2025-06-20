import { IWheelComponentBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { Actions } from '../../../../../shared';

type IProps = IWheelComponentBrand & {
  onChoose: (data: IWheelComponentBrand & Actions) => void;
};

export const WheelComponentBrandItem: FC<IProps> = ({ name, onChoose, id }) => {
  return (
    <li className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mb-5">
      <div className="flex items-center justify-between flex-wrap p-4">
        <p className="text-sm md:text-xl font-medium text-gray-800">{name}</p>

        <div>
          <button
            className="p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
            aria-label="Delete"
            onClick={() =>
              onChoose({
                id,
                name,
                type: 'edit',
              })
            }
          >
            <img
              className="w-8 h-6 opacity-70 hover:opacity-100 transition-opacity"
              src="/editing.svg"
              alt="Edit"
            />
          </button>
          <button
            className="p-2 rounded-full hover:bg-red-50 transition-colors duration-200"
            aria-label="Delete"
            onClick={() =>
              onChoose({
                id,
                name,
                type: 'delete',
              })
            }
          >
            <img
              className="w-8 h-6 opacity-70 hover:opacity-100 transition-opacity"
              src="/deleting.svg"
              alt="Delete"
            />
          </button>
        </div>
      </div>
    </li>
  );
};
