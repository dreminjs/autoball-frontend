import { IProduct } from "@autoball-frontend/shared-types";
import { FC } from "react";


type Props = IProduct

export const Info: FC<Props> = ({ ...props }) => {


  return (
    <div className="border-b pb-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">
        {props.car_brand_name} {props.car_series_name} - {props.car_part_name}
      </h1>
      
      <div className="flex items-center mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded mr-2">
          {props.condition === 'new' ? 'Новый' : 'Б/У'}
        </span>
        <span className={`text-xs font-semibold px-2.5 py-0.5 rounded ${
          props.is_available 
            ? 'bg-green-100 text-green-800' 
            : 'bg-red-100 text-red-800'
        }`}>
          {props.is_available ? 'В наличии' : 'Под заказ'}
        </span>
      </div>
      
      <div className="flex items-baseline mb-6">
        <span className="text-3xl font-bold text-gray-900 mr-3">
          {props.price} {props.currency}
        </span>
        {props.discount > 0 && (
          <>
            <span className="text-lg text-gray-500 line-through mr-2">
              {props.price * (1 + props.discount/100) } {props.currency}
            </span>
            <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
              -{props.discount}%
            </span>
          </>
        )}
      </div>
      
        <button>
            Добавить в корзину
        </button>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div>
          <span className="text-sm text-gray-500 block">Артикул</span>
          <span className="font-medium">{props.article}</span>
        </div>
        <div>
          <span className="text-sm text-gray-500 block">OEM</span>
          <span className="font-medium">{props.OEM}</span>
        </div>
      </div>
    </div>
  );
}