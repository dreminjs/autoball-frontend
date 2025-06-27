import { Code } from "@autoball-frontend/shared-types"
import { instance } from "../api/api-instance"




export const findOne = async (code: Code) => {
    return await instance.get(`https://api.nbrb.by/exrates/currencies/${code}`)
}