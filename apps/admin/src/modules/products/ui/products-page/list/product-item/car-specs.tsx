import { IProduct } from '@autoball-frontend/shared-types';
import { InfoRow } from './info-row';
import { FC } from 'react';
import {
  gearboxTitles,
  fuelTitles,
  bodyTypeTitles,
} from '../../../../model/data';

type Props = Pick<IProduct, 'volume' | 'gearbox' | 'fuel' | 'type_of_body'>;

export const CarSpecs: FC<Props> = ({
  volume,
  gearbox,
  fuel,
  type_of_body,
}) => (
  <>
    <InfoRow label="Объем" value={`${volume} л`} />
    <InfoRow label="КПП" value={gearboxTitles[gearbox]} />
    <InfoRow label="Топливо" value={fuelTitles[fuel] || '-'} />
    <InfoRow label="Кузов" value={bodyTypeTitles[type_of_body]} />
  </>
);
