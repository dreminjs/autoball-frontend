import { ICarBrand } from '@autoball-frontend/shared-types';
import { FC } from 'react';
import { Actions } from '../../../model/types/actions';
import { Link } from 'react-router-dom';
import { PAGE_URLS } from '../../../../../shared/constants';

type IProps = ICarBrand & {
  onChoose: (data: ICarBrand & Actions) => void;
};

export const CarBrandItem: FC<IProps> = ({ name, picture, onChoose, id }) => {  
  


  return (
    <li className="border border-gray-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 bg-white mb-5">
      <div className="flex items-center justify-between flex-wrap p-4">
        <div className="flex items-center gap-6">
          <div className="w-20 h-20 flex items-center justify-center bg-gray-100 rounded-lg overflow-hidden">
            <img
              src={`https://console-production-f4fc.up.railway.app/api/v1/buckets/avtobol/objects/download?preview=true&prefix=${picture}&version_id=null`}
              alt={name}
              className="object-contain w-full h-full"
            />
          </div>
          <p className="text-sm md:text-xl font-medium text-gray-800">
            {name}
          </p>
        </div>

        <div className="flex gap-3 items-center ml-2">
          <Link
            to={`${PAGE_URLS['carseries']}?brandId=${id}&brandName=${name}`}
            title="посмотреть серии бренда"
            className="text-sm md:text-xl font-medium text-gray-800"
          >
            Серии
          </Link>
          <button
            onClick={() =>
              onChoose({
                id,
                name,
                picture,
                type: 'edit',
              })
            }
            className="p-2 rounded-full hover:bg-blue-50 transition-colors duration-200"
            aria-label="Edit"
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
                picture,
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
