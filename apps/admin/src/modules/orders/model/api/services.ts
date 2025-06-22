import { instance } from "../../../../shared/api/api-instance";
import { SERVICE_URLS } from "../../../../shared/constants";
import { IFindManyDto, IPatchOrderStatusDto } from "../types/dto";


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