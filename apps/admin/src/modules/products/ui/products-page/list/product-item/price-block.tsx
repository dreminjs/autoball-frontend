import { IProduct } from "@autoball-frontend/shared-types";
import { FC } from "react";
import { QUERY_KEYS } from "../../../../../../shared/constants";
import { Link } from "react-router-dom";


type Props = Pick<IProduct, "price" | "currency" | "discount" | "is_available" | "count" | "id">

export const PriceBlock: FC<Props> = ({ price, currency, discount, is_available, count, id }) => (
  <div className="flex flex-wrap justify-between items-center mt-auto pt-3 border-t border-gray-100">
    <div className="flex items-baseline gap-2 mb-2 sm:mb-0">
      <span className="text-xl font-bold text-gray-900">
        {price} {currency}
      </span>
      {discount > 0 && (
        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
          -{discount}%
        </span>
      )}
    </div>

    <div className="flex items-center gap-3">
      <div>
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            is_available ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
          }`}
        >
          {is_available ? 'В наличии' : 'Нет в наличии'}
        </span>{" "}
        <span className="text-sm text-gray-500">{count} шт.</span>
      </div>
      <Link
        className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors"
        to={`${QUERY_KEYS.edit}/${id}`}
      >
        Редактировать
      </Link>
    </div>
  </div>
);
