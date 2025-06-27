type uuid = string;

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone_number: string;
}

export interface ICarBrand {
  id: uuid;
  name: string;
  picture: string;
}

export interface ICarSeries {
  id: uuid;
  name: string;
  year: string;
  car_brand_id: uuid;
}

export interface ITokens {
  user_id: uuid;
  access_token: string;
  refresh_token: string;
}

export interface IProduct {
  id: uuid;
  pictures: string[];
  car_brand_name: string;
  car_series_name: string;
  car_part_name: string;
  year: number;
  volume: number;
  gearbox: GearboxType;
  fuel: FuelType;
  type_of_body: BodyType;
  condition: ProductCondition;
  description: string;
  real_price: number;
  fake_price: number;
  count: number;
  OEM: string
  VIN: string
}

export interface ICart {
  product_id: uuid;
  user_id: uuid;
  product_brand: string;
  product_series: string;
  product_part: string;
}

export interface ITokens {
  id: uuid;
  access_token: string;
  refresh_token: string;
}

export interface IWheelComponentBrand {
  id: uuid
  name: string
}

export interface ICarPart {
  id: uuid,
  name: string
}

export interface IOrder {
    user_id: uuid,
    user_name: string,
    user_phone: string,
    product_id: string,
    product_brand: string,
    product_series: string,
    product_part: string,
    created_at: string,
    description: string,
    status: OrderStatus
} 

export interface IInfiteScrollQueryParameters {
  search: string
  cursor: unknown
  limit: number
}

export type OrderStatus = "open" | "closed"

export type Role = 'admin' | 'owner' | 'worker' | 'seo' | 'client';

export type BodyType = 
  | 'sedan'
  | 'hatchback'
  | 'coupe'
  | 'universal'
  | 'minivan'
  | 'jeep'
  | 'minibus' 
  | 'convertible'
  | 'van'
  | 'liftback'
  | 'compact'
  | 'tractor';

export type GearboxType = 
  | 'manual'
  | 'automatic'
  | 'robotic'
  | 'variator';

export type Code = 451 | 456 | 431 | 0

export type Currency = "USD" | "PLN" | "BYN" | "EUR" | "RUB"

export type WheelComponent = "disk" | "tire"

export type FuelType = 'gasoline' | 'diesel' | 'hybrid' | 'electric';

export type ProductCondition = 'used' | 'new';

export interface IWithPagatination<T> {
  items: T[]
  total_count: number
}

export interface IInfiteScrollResponse<T> {
  items: T[];
  next_cursor: null | number;
}
