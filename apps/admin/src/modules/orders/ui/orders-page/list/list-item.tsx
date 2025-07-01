import { IOrder } from "@autoball-frontend/shared-types"
import { FC } from "react"
import { formatDate } from "../../../../../shared/lib/format-date"
import { statusColors } from "../../../model/status-styles"

type Props = IOrder

export const ListItem: FC<Props> = (props) => {

    return (
  <li className="bg-white rounded-lg shadow-md p-5 mb-4 border border-gray-200 hover:shadow-lg transition-shadow relative list-none">
    
    <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {/* Заказ #{props.id.slice(0, 8)} */}
            Заказ # A12345
          </h3>
          <p className="text-sm text-gray-500">
            Создан: {formatDate(props.created_at)}
          </p>
        </div>
        
        <div className="flex items-center">
          <select
            // value={currentStatus}
            // onChange={handleStatusChange}
            // disabled={isUpdating}
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors["open"]} border-0 focus:ring-0 focus:outline-none appearance-none pr-7`}
          >
            <option value="open" className="bg-white text-gray-800">
              Открыт
            </option>
            <option value="closed" className="bg-white text-gray-800">
              Закрыт
            </option>
          </select>
          <div className="pointer-events-none absolute right-3 top-1/2 transform -translate-y-1/2">
            <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="border-r pr-4">
          <h4 className="font-medium text-gray-700 mb-2">Клиент</h4>
          <div className="space-y-1">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              {props.user_name}
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {props.user_phone}
            </p>
          </div>
        </div>

        <div>
          <h4 className="font-medium text-gray-700 mb-2">Товар</h4>
          <div className="space-y-1">
            <p><span className="text-gray-600">Бренд:</span> {props.product_brand}</p>
            <p><span className="text-gray-600">Серия:</span> {props.product_series}</p>
            <p><span className="text-gray-600">Запчасть:</span> {props.product_part}</p>
          </div>
        </div>
      </div>

      {props.description && (
        <div className="mt-3 pt-3 border-t border-gray-100">
          <h4 className="font-medium text-gray-700 mb-2">Описание</h4>
          <p className="text-gray-600">{props.description}</p>
        </div>
      )}

      <div className="mt-4 flex justify-end space-x-2">
        <button 
          className="px-3 py-1 text-sm bg-blue-50 text-blue-600 rounded hover:bg-blue-100 transition-colors"
          onClick={() => alert(`Детали заказа ${props.user_id}`)}
        >
          Подробнее
        </button>
        <button 
          className="px-3 py-1 text-sm bg-gray-50 text-gray-600 rounded hover:bg-gray-100 transition-colors"
          onClick={() => alert(`Редактирование заказа ${props.product_id}`)}
        >
          Редактировать
        </button>
      </div>
    </li>
    )
}