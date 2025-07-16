import { IProduct } from "@autoball-frontend/shared-types";
import { InfoRow } from "./info-row";
import { FC } from "react";


type Props = Pick<IProduct,"tire_brand_name" | "tire_diametr" | "tire_width" | "tire_height" | "tire_season">

export const TireInfo: FC<Props> = (props) => (
  <>
    <InfoRow label="Бренд шин" value={props.tire_brand_name || '—'} />
    <InfoRow label="Диаметр" value={props.tire_diametr || '—'} />
    <InfoRow label="Ширина" value={props.tire_width || '—'} />
    {props.tire_height && <InfoRow label="Высота" value={props.tire_height} />}
    {props.tire_season && <InfoRow label="Сезон" value={props.tire_season} />}
  </>
);