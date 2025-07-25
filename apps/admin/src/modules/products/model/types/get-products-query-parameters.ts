import { BodyType, FuelType, GearboxType, TAvailability } from "@autoball-frontend/shared-types";
import { TDiameterOption } from "./dics.interface";
import { TTiresCar, TTiresSeason } from "../../../../shared/types";

export interface IGetProductsQueryParameters {
  article?: string | null
  countItems?: number;
  isPrintedStatus?: boolean | null;
  carBrandId?: string | null;
  seriesId?: string | null;
  carPartId?: string | null;
  yearFrom?: string | null;
  yearTo?: string | null;
  priceFrom?: string | null;
  priceTo?: string | null;
  availability?: TAvailability | null;
  volume?: number | null;
  fuel?: FuelType | null;
  gearbox?: GearboxType | null;
  typeOfBody?: BodyType | null;
  
  discDiameter?: TDiameterOption | null;
  discWidth?: string | null;
  discEjection?: string | null;
  discDia?: string | null;
  discHoles?: string | null;
  discPcd?: string | null;
  discBrandId?: string | null;
  discModel?: string | null;
  
  tiresDiameter?: TDiameterOption | null;
  tiresWidth?: string | null;
  tiresHeight?: string | null;
  tiresIndex?: string | null;
  tiresCarType?: TTiresCar | null;
  tiresModel?: string | null;
  tiresBrandId?: string | null;
  tiresSeason?: TTiresSeason | null;
  tiresResidueFrom?: string | null;
  tiresResidueTo?: string | null;
  
}