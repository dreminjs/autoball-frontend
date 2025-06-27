import { IUser } from "@autoball-frontend/shared-types"
import { QUERY_KEYS, SERVICE_URLS } from "../../constants"
import { instance } from "../api-instance"



export const getMe = async (): Promise<IUser> => {
    return (await instance.get(`${SERVICE_URLS.users}/${QUERY_KEYS.me}/info`)).data
}