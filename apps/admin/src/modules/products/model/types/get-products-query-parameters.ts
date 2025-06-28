import { BodyType, FuelType, GearboxType, ProductCondition } from "@autoball-frontend/shared-types";
import { TDiameterOption } from "./dics.interface";
import { TTiresCar, TTiresSeason } from "../../../../shared/types";
import { TAvailability } from "./availability.interface";

export interface IGetProductsQueryParameters {
  condition?: ProductCondition;
  countItems?: number;
  page: number;
  isPrinted?: boolean | null;
  brandId?: string | null;
  seriesId?: string | null;
  carPartId?: string | null;
  yearFrom?: number | null;
  yearTo?: number | null;
  priceFrom?: number | null;
  priceTo?: number | null;
  availability?: TAvailability | null;
  volume?: number | null;
  fuel?: FuelType | null;
  gearbox?: GearboxType | null;
  typeOfBody?: BodyType | null;
  
  discDiameter?: TDiameterOption | null;
  discWidth?: number | null;
  discEjection?: number | null;
  discDia?: number | null;
  discHoles?: number | null;
  discPcd?: number | null;
  discBrandId?: string | null;
  discModel?: string | null;
  
  tiresDiameter?: TDiameterOption | null;
  tiresWidth?: number | null;
  tiresHeight?: number | null;
  tiresIndex?: string | null;
  tiresCarType?: TTiresCar | null;
  tiresModel?: string | null;
  tiresBrandId?: string | null;
  tiresSeason?: TTiresSeason | null;
  tiresResidueFrom?: number | null;
  tiresResidueTo?: number | null;
  
}