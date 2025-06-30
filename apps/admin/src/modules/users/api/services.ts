import { instance } from "../../../shared/api/api-instance"
import { SERVICE_URLS } from "../../../shared/constants"


export const findOne = async (id: string) => {
    return await instance.get(`${SERVICE_URLS.user}/${id}`)
}

export const findMany = async () => {
    return await instance.get(`${SERVICE_URLS.user}`)
}

export const deleteOne = async (id: string) => {
    return await instance.delete(`${SERVICE_URLS.user}/${id}`)
}