import { ICarSeries } from '@autoball-frontend/shared-types';
import { FC } from 'react';

type IProps = ICarSeries & {
    onChoose:  (newValue: (ICarSeries & {
    type: "delete" | "edit";
}) | null) => void
}

export const ListItem: FC<IProps> = ({ name, year, onChoose, ...props }) => {
  return (
    <li className="group py-4 px-4 hover:bg-gray-50 transition-colors rounded-lg flex items-center justify-between">
      <div className="flex items-center min-w-0 flex-1">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-gray-900 truncate">
            {name}
          </h3>
        </div>

        <div className="ml-2 flex-shrink-0">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {year}
          </span>
        </div>
      </div>

      <div className="ml-4 flex-shrink-0 transition-opacity">
        <button
          onClick={() => onChoose({
            ...props, year, name,
            type: 'edit'
          })}
          className="mr-2 p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
          aria-label="Edit"
        >
          <img src={'/editing.svg'} alt="editing" />
        </button>

        <button
         onClick={() => onChoose({
            ...props, year, name,
            type: 'delete'
          })}
          className="p-1 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50"
          aria-label="Delete"
        >
          <img src={'/deleting.svg'} alt="deleting" />
        </button>
      </div>
    </li>
  );
};
