import { IProduct } from "@autoball-frontend/shared-types";
import { InfoRow } from "./info-row";
import { FC } from "react";

type Props = Pick<IProduct, "disc_brand_name" | "disc_diametr" | "disc_width" | "disc_pcd" | "disc_ejection" | "disc_holes">

export const DiscInfo: FC<Props> = (props) => (
  <>
    <InfoRow label="Бренд дисков" value={props.disc_brand_name || '—'} />
    <InfoRow label="Диаметр" value={props.disc_diametr || '—'} />
    <InfoRow label="Ширина" value={props.disc_width || '—'} />
    {props.disc_pcd && <InfoRow label="PCD" value={props.disc_pcd} />}
    {props.disc_ejection && <InfoRow label="Остаток" value={props.disc_ejection} />}
    {props.disc_holes && <InfoRow label="Кол-во отверстий" value={props.disc_holes} />}
  </>
);