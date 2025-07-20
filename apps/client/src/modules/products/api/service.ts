import { instance } from "@/shared/api/api-instance"
import { QUERY_KEYS, SERVICE_URLS } from "@/shared/constants"
import { IProduct, IWithPaganation } from "@autoball-frontend/shared-types"

export const findMany = async (): Promise<IWithPaganation<IProduct>> => {
    return (await instance.get(`${SERVICE_URLS.product}/${QUERY_KEYS.public}`)).data
}