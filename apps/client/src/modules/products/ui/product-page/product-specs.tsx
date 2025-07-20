import { SpecItem } from './spec-item';
import { bodyTypeTitles, fuelTitles, gearboxTitles } from '../../model/data';
import { IProduct } from '@autoball-frontend/shared-types';
import { FC } from 'react';

type Props = IProduct;

export const ProductSpecs: FC<Props> = (props) => {
  const hasDiscInfo = props.disc_id || props.disc_brand_name;
  const hasTireInfo = props.tire_id || props.tire_brand_name;

  return (
    <div className="space-y-8">
      <section>
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Основные характеристики
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <SpecItem label="Год выпуска" value={props.year} />
          {props.volume && (
            <SpecItem label="Объем двигателя" value={`${props.volume} л`} />
          )}
          {props.gearbox && (
            <SpecItem
              label="Коробка передач"
              value={gearboxTitles[props.gearbox]}
            />
          )}

          {props.fuel && (
            <SpecItem label="Топливо" value={fuelTitles[props.fuel]} />
          )}
          {props.type_of_body && (
            <SpecItem
              label="Тип кузова"
              value={bodyTypeTitles[props.type_of_body]}
            />
          )}

          <SpecItem label="VIN" value={props.VIN} />
        </div>
      </section>

      {hasDiscInfo && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Характеристики дисков
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <SpecItem label="Бренд" value={props.disc_brand_name || ''} />
            <SpecItem label="Модель" value={props.disc_model || ''} />
            <SpecItem label="Диаметр" value={props.disc_diametr || ''} />
            <SpecItem label="Ширина" value={props.disc_width || ''} />
            <SpecItem label="PCD" value={props.disc_pcd || ''} />
            <SpecItem label="Вылет" value={props.disc_ejection || ''} />
          </div>
        </section>
      )}

      {hasTireInfo && (
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Характеристики шин
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <SpecItem label="Бренд" value={props.tire_brand_name || ''} />
            <SpecItem label="Модель" value={props.tire_model || ''} />
            <SpecItem
              label="Размер"
              value={`${props.tire_width}/${props.tire_height} R${props.tire_diametr}`}
            />
            <SpecItem label="Сезон" value={props.tire_season || ''} />
            <SpecItem label="Индекс" value={props.tire_index || ''} />
            <SpecItem
              label="Остаток протектора"
              value={props.tire_residue ? `${props.tire_residue}%` : ''}
            />
          </div>
        </section>
      )}
    </div>
  );
};
