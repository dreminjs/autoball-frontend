import { Currency, OrderStatus } from "@autoball-frontend/shared-types"

import { z } from "zod"
import { PostOrderProductsSchema } from "../schemas/post-order-products.schema"

export interface IFindManyDto {
    status: "open" | "closed",
    page: number
    page_size: number
}

export interface IPatchOrderStatusDto {
    status: OrderStatus
    order_id: string
}

export type PostOrderProductsFormData = z.infer<typeof PostOrderProductsSchema>;

export interface IOrderProductInfo {
    article: string
    price: number,
    currency: Currency
}

export type PostOrderProductsDto = {
    articles: string[]
} & PostOrderProductsFormData