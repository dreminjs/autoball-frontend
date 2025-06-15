import { ICarSeries } from '@autoball-frontend/shared-types';
import { FC } from 'react';

type IProps = ICarSeries


export const ListItem: FC<IProps> = ({ name, year }) => {
  return (
    <li className="py-4 px-2 hover:bg-gray-50 transition-colors">
      <div className="flex items-center justify-between">
        <div className="min-w-0 flex-1">
          <h3 className="text-base font-medium text-gray-900 truncate">
            {name}
          </h3>
        </div>
        
        {
          <div className="ml-2 flex-shrink-0">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
              {year}
            </span>
          </div>
        }
      </div>
    </li>
  );
};