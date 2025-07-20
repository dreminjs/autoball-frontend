import { instance } from "@/shared/api/api-instance"
import { SERVICE_URLS } from "@/shared/constants"
import { OrderForm } from "../model/types"

export const index = async (data: OrderForm) => {
    return await instance.post(`${SERVICE_URLS.orders}/create-order`, data)
}