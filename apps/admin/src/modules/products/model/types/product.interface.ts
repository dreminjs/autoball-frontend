
import { z } from "zod"
import { productSchema } from "../schemas/product.schema";
import { BodyType, Currency, TAvailability } from "@autoball-frontend/shared-types";

export type ProductFormData = z.infer<typeof productSchema>;

export type EngineDto = Pick<
  ProductFormData,
  'engine_type' | 'gearbox' | 'fuel' | 'volume'
> & {
  gearbox: NonNullable<ProductFormData['gearbox']>
  fuel: NonNullable<ProductFormData['fuel']>
  volume: NonNullable<ProductFormData['volume']>
};

export interface DiscDto {
  disc_brand_id?: string;        
  diametr?: string;
  width?: number;
  ejection?: number;
  dia?: number;
  holes?: number;
  pcd?: number;
  model?: string;
}

export interface TireDto {
  season?: 'winter' | 'summer' | 'all_season';
  car_type?: 'passenger' | 'truck' | 'commercial';
  width?: number;
  height?: number;
  model?: string;
  tire_brand_id?: string;       
  residue?: number;
  diametr?: string | null; 
  index?: string;
}

export interface PostProductDto {
  OEM: string;
  car_brand_id?: string;
  car_series_id?: string;
  car_part_id?: string;
  currency: Currency
  discount?: number;
  year: number;
  type_of_body?: BodyType
  VIN?: string;
  note?: string;
  description?: string;
  price: number;
  condition: 'used'
  count: number;
  details: DiscDto | TireDto | EngineDto | null
  availability?: TAvailability
}

export interface EditProductDto {
  OEM: string;
  car_brand_id?: string;
  car_series_id?: string;
  car_part_id?: string;
  currency: Currency
  discount?: number;
  year: number;
  type_of_body?: BodyType
  VIN?: string;
  note?: string;
  description?: string;
  price: number;
  condition: 'used'
  count: number;
  details: DiscDto | TireDto | EngineDto | null
  availability?: TAvailability
}