type uuid = string;

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  role: Role
}

export interface ICarBrand {
  id: uuid;
  name: string
  picture: string
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
  id: string; // или uuid если у вас есть такой тип
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
  price: number; // переименовано из real_price, так как в данных только price
  count: number;
  OEM: string;
  VIN: string;
  article: string;
  availability: TAvailability
  created_at: string;
  currency: string;
  
  // Поля дисков
  disc_brand_name: string | null;
  disc_dia: number | null;
  disc_diametr: string | null;
  disc_ejection: number | null;
  disc_holes: number | null;
  disc_model: string | null;
  disc_pcd: number | null;
  disc_width: number | null;
  
  // Поля шин
  tire_brand_name: string | null;
  tire_car_type: string | null;
  tire_diametr: string | null;
  tire_height: number | null;
  tire_index: string | null;
  tire_model: string | null;
  tire_residue: number | null;
  tire_season: string | null;
  tire_width: number | null;
  
  // Общие поля
  discount: number;
  is_available: boolean;
  is_printed: boolean;
  note: string;
  post_by: string;
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

export interface IListItem {
  id: uuid
  name: string
}

export type OrderStatus = "open" | "closed"

export type Role = 'admin' | 'worker' | 'client';

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

export type WheelComponent = "disc" | "tire"

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

export type TAvailability = "in stock" | "custom order"