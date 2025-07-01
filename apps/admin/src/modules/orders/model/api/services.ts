import { instance } from "../../../../shared/api/api-instance";
import { QUERY_KEYS, SERVICE_URLS } from "../../../../shared/constants";
import { IFindManyDto, IPatchOrderStatusDto, PostOrderProductsDto } from "../types/dto";


export const findMany = async (dto: IFindManyDto) => {
    return await instance.get(`${SERVICE_URLS.orders}`, {
        params: {
            ...dto
        }
    })
}
export const patchOne = async (dto: IPatchOrderStatusDto) => {
    return await instance.patch(`${SERVICE_URLS.orders}/${dto.order_id}?status=${dto.status}`)
}   


export const createOne = async (dto: PostOrderProductsDto) => {
    return await instance.post(`${SERVICE_URLS.orders}/${QUERY_KEYS.private}`, dto)
}