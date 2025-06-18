import { ICarSeries } from '@autoball-frontend/shared-types';
import { FC } from 'react';

type IProps = ICarSeries


export const ListItem: FC<IProps> = ({ name, year }) => {
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

      <div className="ml-4 flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => console.log()}
          className="mr-2 p-1 text-gray-500 hover:text-blue-600 rounded-full hover:bg-blue-50"
          aria-label="Edit"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        
        <button
          onClick={() => console.log()}
          className="p-1 text-gray-500 hover:text-red-600 rounded-full hover:bg-red-50"
          aria-label="Delete"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </li>
  );
};