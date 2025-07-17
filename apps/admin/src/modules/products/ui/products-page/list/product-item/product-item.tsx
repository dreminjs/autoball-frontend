import { IProduct, ProductCondition } from '@autoball-frontend/shared-types';
import { useAtom, useAtomValue } from 'jotai';
import { FC } from 'react';
import {
  checkboxesAtom,
  showAvailibeCheckboxesAtom,
  showScanCheckboxesAtom,
  showUnavalibleCheckboxesAtom,
  showUnscanCheckboxesAtom,
} from '../../../../model/product-atoms-page';
import { CarSpecs } from './car-specs';
import { DiscInfo } from './disc-info';
import { InfoRow } from './info-row';
import { PriceBlock } from './price-block';
import { TireInfo } from './tire-info';
import { Images } from './images';

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

  const hasDiscInfo = props.disc_id;
  const hasTireInfo = props.tire_id;
  const showCarSpecs = props.volume;

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
        <Images content={props.pictures} />

        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {props.car_part_name} {props.car_brand_name} {props.car_series_name}
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-600 mb-4">
            <InfoRow label="Год" value={props.year} />

            {showCarSpecs && <CarSpecs {...props} />}
            {hasDiscInfo && <DiscInfo {...props} />}
            {hasTireInfo && <TireInfo {...props} />}

            <InfoRow
              label="Состояние"
              value={getConditionTitle(props.condition)}
            />
            <InfoRow
              label="VIN"
              value={<span className="font-mono">{props.VIN}</span>}
            />
            <InfoRow
              label="OEM"
              value={<span className="font-mono">{props.OEM}</span>}
            />
            <InfoRow
              label="Распечатано"
              value={props.is_printed ? '✅' : '❌'}
            />

            {props.availability === 'custom order' && (
              <InfoRow
                label="Есть на складе"
                value={<span className="font-mono">под заказ</span>}
              />
            )}
          </div>

          {props.description && (
            <p className="text-sm text-gray-600 mb-4 line-clamp-2">
              {props.description}
            </p>
          )}

          <PriceBlock {...props} id={props.id} />
        </div>
      </div>
    </li>
  );
};

const getConditionTitle = (condition: ProductCondition): string => {
  return condition === 'new' ? 'Новый' : 'Б/У';
};
