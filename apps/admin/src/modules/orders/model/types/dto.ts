import { OrderStatus } from "@autoball-frontend/shared-types"


export interface IFindManyDto {
    status: "open" | "closed",
    page: number
    page_size: number
}

export interface IPatchOrderStatusDto {
    status: OrderStatus
    order_id: string
}