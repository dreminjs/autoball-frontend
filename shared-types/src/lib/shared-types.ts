type uuid = string

export interface IUser {
  id: string; // UUID формат
  name: string;
  email: string;
  phone_number: string;
}

export interface ICarBrand {
  id: uuid,
  name: string,
  picture: string
}

export interface ICarSeries {
  id: uuid,
  name: string
  year: string,
  car_brand_id: uuid
}

export interface ITokens {
  user_id: uuid
  access_token: string
  refresh_token: string
}

export interface IProduct {
  id: uuid,
  pictures: string[]
  car_brand_name: string
  car_series_name: string
  car_part_name: string,
  year: number
  volume: number,
  gearbox: GearboxType,
  fuel: FuelType,
  type_of_body: BodyType,
  condition: ProductCondition,
  description: string,
  real_price: number,
  fake_price: number,
  count: number
}

export interface ICart {
  product_id: uuid
  user_id: uuid
  product_brand: string
  product_series: string
  product_part: string
}

export interface ITokens {
   id: uuid
   access_token: string
   refresh_token: string
}

export enum Roles {
  admin,
  owner,
  worker,
  seo,
  client
}


export enum BodyType {
  sedan,
  hatchback,
  coupe,
  universal,
  minivan,
  jeep,
  minibuts,
  convertible,
  van,
  liftback,
  compact,
  tractor
}

export enum FuelType {
  gasoline,
  diesel,
  hybrid,
  electric
}

export enum GearboxType {
  manual,
  automatic,
  robotic,
  variator
} 

export enum OrderStatuses {
  open,
  closed,
}

export enum ProductCondition {
  new,
  used
}