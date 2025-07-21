import {
  Currency,
  IInfiteScrollQueryParameters,
  IProduct,
  OrderStatus,
} from '@autoball-frontend/shared-types';

import { z } from 'zod';
import { PostOrderProductsSchema } from '../schemas/post-order-products.schema';

export interface IFindManyDto extends IInfiteScrollQueryParameters {
  status: 'open' | 'closed';
}

export interface IPatchOrderStatusDto {
  status: OrderStatus;
  order_id: string;
}

export type PostOrderProductsFormData = z.infer<typeof PostOrderProductsSchema>;

export type IOrderProductInfo = Pick<
  IProduct,
  | 'article'
  | 'currency'
  | 'price'
  | 'car_brand_name'
  | 'car_part_name'
  | 'car_series_name'
   | "disc_brand_name"
   | "tire_brand_name"
   | "id"
>;

export type PostOrderProductsDto = {
  product_ids: string[];
  order_data: PostOrderProductsFormData 
} 
