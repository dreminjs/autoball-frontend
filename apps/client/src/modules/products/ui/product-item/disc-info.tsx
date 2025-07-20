import { IProduct } from "@autoball-frontend/shared-types";
import { InfoRow } from "./info-row";
import { FC } from "react";

type Props = Pick<IProduct, "disc_brand_name" | "disc_diametr" | "disc_width" | "disc_pcd" | "disc_ejection" | "disc_holes">

export const DiscInfo: FC<Props> = (props) => (
  <>
    <InfoRow label="Бренд дисков" value={props.disc_brand_name || '—'} itemProp={"brand"} />
    <InfoRow label="Диаметр" value={props.disc_diametr || '—'} itemProp={"size"} />
    <InfoRow label="Ширина" value={props.disc_width || '—'} itemProp={"width"} />
    {props.disc_pcd && <InfoRow label="PCD" value={props.disc_pcd} itemProp={"additionalProperty"} />}
    {props.disc_ejection && <InfoRow label="Остаток" value={props.disc_ejection} itemProp={"additionalProperty"} />}
    {props.disc_holes && <InfoRow label="Кол-во отверстий" value={props.disc_holes} itemProp={"numberOfItems"} />}
  </>
);