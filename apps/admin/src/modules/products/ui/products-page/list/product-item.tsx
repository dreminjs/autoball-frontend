import { IProduct, ProductCondition } from '@autoball-frontend/shared-types';
import { useAtom, useAtomValue } from 'jotai';
import { FC } from 'react';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showScanCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
  showUnscanCheckboxesAtom,
} from '../../../model/atoms-page';
import { bodyTypeTitles, fuelTitles, gearboxTitles } from '../../../model/data';

type Props = IProduct;

export const ProductItem: FC<Props> = (props) => {
  const isShowScanCheckboxes = useAtomValue(showScanCheckboxesAtom);
  const isShowAvailibleCheckboxes = useAtomValue(showAvailibeCheckboxesAtom);

  const isShowUnscanCheckboxes = useAtomValue(showUnscanCheckboxesAtom);

  const isShowUnavailibleCheckboxes = useAtomValue(
    showUnavalibleCheckboxesAtom
  );

  const [checkboxes, setCheckboxes] = useAtom(checkboxesAtom);
  const checked = checkboxes?.some((id) => id === props.id);

  const handleToggleCheckbox = () => {
    if (checked) {
      setCheckboxes((prev) => prev?.filter((id) => id !== props.id) ?? []);
    } else {
      setCheckboxes((prev) => [...(prev ?? []), props.id]);
    }
  };

  const hasDiscInfo =
    props.disc_brand_name || props.disc_diametr || props.disc_width;
  const hasTireInfo =
    props.tire_brand_name || props.tire_diametr || props.tire_width;
  const showCarSpecs = !hasDiscInfo && !hasTireInfo;

  return (
    <li className="relative border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow bg-white mb-4">
      {(isShowScanCheckboxes ||
        isShowAvailibleCheckboxes ||
        isShowUnscanCheckboxes ||
        isShowUnavailibleCheckboxes) && (
        <div className="absolute top-4 right-4">
          <input
            type="checkbox"
            onChange={handleToggleCheckbox}
            checked={checked}
            className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
          />
        </div>
      )}

      <div className="flex flex-col sm:flex-row gap-4">
        {props.pictures?.length > 0 && (
          <div className="w-full sm:w-40 h-40 flex-shrink-0 rounded-lg overflow-hidden bg-gray-100">
            <img
              src={`https://console-production-f4fc.up.railway.app/api/v1/buckets/avtobol/objects/download/${props.pictures[0]}`}
              alt={`${props.car_brand_name} ${props.car_series_name}`}
              className="w-full h-full object-contain"
              loading="lazy"
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {props.car_part_name} {props.car_brand_name} {props.car_series_name}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
            <div className="flex items-start">
              <span className="text-gray-500 min-w-[70px]">Год:</span>
              <span>{props.year}</span>
            </div>

            {showCarSpecs && (
              <>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Объем:</span>
                  <span>{props.volume} л</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">КПП:</span>
                  <span>{gearboxTitles[props.gearbox]}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Топливо:</span>
                  <span>{fuelTitles[props.fuel] || "-"}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Кузов:</span>
                  <span>{bodyTypeTitles[props.type_of_body]}</span>
                </div>
              </>
            )}

            {hasDiscInfo && (
              <>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">
                    Бренд дисков:
                  </span>
                  <span>{props.disc_brand_name || '—'}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Диаметр:</span>
                  <span>{props.disc_diametr || '—'}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Ширина:</span>
                  <span>{props.disc_width || '—'}</span>
                </div>
                {props.disc_pcd && (
                  <div className="flex items-start">
                    <span className="text-gray-500 min-w-[70px]">PCD:</span>
                    <span>{props.disc_pcd}</span>
                  </div>
                )}
                {props.disc_ejection && (
                  <div className="flex items-start">
                    <span className="text-gray-500 min-w-[70px]">Остаток:</span>
                    <span>{props.disc_ejection}</span>
                  </div>
                )}
                {props.disc_holes && (
                  <div className="flex items-start">
                    <span className="text-gray-500 min-w-[70px]">
                      Кол-во отверстий:
                    </span>
                    <span>{props.disc_holes}</span>
                  </div>
                )}
              </>
            )}

            {hasTireInfo && (
              <>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Бренд шин:</span>
                  <span>{props.tire_brand_name || '—'}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Диаметр:</span>
                  <span>{props.tire_diametr || '—'}</span>
                </div>
                <div className="flex items-start">
                  <span className="text-gray-500 min-w-[70px]">Ширина:</span>
                  <span>{props.tire_width || '—'}</span>
                </div>
                {props.tire_height && (
                  <div className="flex items-start">
                    <span className="text-gray-500 min-w-[70px]">Высота:</span>
                    <span>{props.tire_height}</span>
                  </div>
                )}
                {props.tire_season && (
                  <div className="flex items-start">
                    <span className="text-gray-500 min-w-[70px]">Сезон:</span>
                    <span>{props.tire_season}</span>
                  </div>
                )}
              </>
            )}

            <div className="flex items-start">
              <span className="text-gray-500 min-w-[70px]">Состояние:</span>
              <span>{getConditionTitle(props.condition)}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 min-w-[70px]">VIN:</span>
              <span className="font-mono">{props.VIN}</span>
            </div>
            <div className="flex items-start">
              <span className="text-gray-500 min-w-[70px]">OEM:</span>
              <span className="font-mono">{props.OEM}</span>
            </div>
            <div className="flex items-start gap-1">
              <span className="text-gray-500 min-w-[70px]">Распечатано:</span>
              <span className="font-mono">
                {props.is_printed ? '✅' : '❌'}
              </span>
            </div>
            {props.availability === 'custom order' && (
              <div className="flex items-start gap-1">
                <span className="text-gray-500 min-w-[70px]">
                  Есть на складе:{' '}
                </span>
                <span className="font-mono">под заказ</span>
              </div>
            )}
          </div>

          {props.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {props.description}
            </p>
          )}

          <div className="flex flex-wrap justify-between items-center mt-auto pt-3 border-t border-gray-100">
            <div className="flex items-baseline gap-2 mb-2 sm:mb-0">
              <span className="text-xl font-bold text-gray-900">
                {props.price} {props.currency}
              </span>
              {props.discount > 0 && (
                <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                  -{props.discount}%
                </span>
              )}
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`text-sm px-2 py-1 rounded-full ${
                  props.is_available
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {props.is_available ? 'В наличии' : 'Нет в наличии'}
              </span>
              <span className="text-sm text-gray-500">{props.count} шт.</span>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const getConditionTitle = (condition: ProductCondition): string => {
  return condition === 'new' ? 'Новый' : 'Б/У';
};
