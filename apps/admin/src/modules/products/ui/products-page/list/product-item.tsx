import {
  IProduct,
  ProductCondition,
} from '@autoball-frontend/shared-types';
import { useAtom, useAtomValue } from 'jotai';
import { FC } from 'react';
import { checkboxesAtom, showScanCheckboxesAtom } from '../../../model/atoms-page';
import { bodyTypeTitles, fuelTitles, gearboxTitles } from '../../../model/data';

type Props = IProduct;

export const ProductItem: FC<Props> = (props) => {
  const isShowScanCheckboxes = useAtomValue(showScanCheckboxesAtom);

  const [checkboxes, setCheckboxes] = useAtom(checkboxesAtom);

  const cheched = checkboxes?.some((id) => id === props.id);

  const handleToggleCheckbox = () => {
    if (cheched) {
      setCheckboxes((prev) => prev && prev.filter((id) => id !== props.id));
    } else {
      setCheckboxes((prev) => prev && [...prev, props.id]);
    }
  };

  return (
    <li className="border mb-2 border-gray-400 rounded-lg p-4 hover:shadow-md transition-shadow w-full xl:mx-auto xl:w-[75%] 2xl:w-[65%]">
      <div className="flex gap-4 items-start">
        {props.pictures?.length > 0 && (
          <div className="w-32 h-32 flex-shrink-0">
            <img
              src={`https://console-production-f4fc.up.railway.app/api/v1/buckets/avtobol/objects/download/${props.pictures[0]}`}
              alt={`${props.car_brand_name} ${props.car_series_name}`}
              className="w-full h-full object-cover rounded-md"
            />
          </div>
        )}

        <div className="flex-1">
          <p className="text-lg font-medium mb-2">
            {`${props.car_part_name} ${props.car_brand_name} ${props.car_series_name}`}
          </p>

          <ul className="block sm:grid grid-cols-2 text-sm text-gray-600 mb-3">
            <li>Год: {props.year}</li>
            <li>Объем: {props.volume} л</li>
            <li>КПП: {gearboxTitles[props.gearbox]}</li>
            <li>Топливо: {fuelTitles[props.fuel]}</li>
            <li>Кузов: {bodyTypeTitles[props.type_of_body]}</li>
            <li>Состояние: {getConditionTitle(props.condition)}</li>
            <li>VIN: {props.VIN}</li>
            <li>OEM: {props.OEM}</li>
          </ul>

          <div className="flex items-center flex-wrap justify-between mt-4">
            <div className="space-x-1">
              <span className="text-lg font-bold">{props.real_price} BYN</span>
              {props.fake_price && (
                <span className="text-gray-400 line-through">
                  {props.fake_price} BYN
                </span>
              )}
            </div>
            <div className="text-sm">В наличии: {props.count} шт.</div>
          </div>
        </div>

        {isShowScanCheckboxes && (
          <input
            type="checkbox"
            onClick={handleToggleCheckbox}
            checked={cheched}
          />
        )}
      </div>
    </li>
  );
};


const getConditionTitle = (condition: ProductCondition): string => {
  return condition === 'new' ? 'Новый' : 'Б/У';
};
