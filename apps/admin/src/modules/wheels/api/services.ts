import { instance } from "../../../shared/api/api-instance"
import { IFindManyQueryParameters } from "../model/types/find-many-query-parameters"




export const findMany = async (path: string, query: IFindManyQueryParameters) => {

    const queryParameters = new URLSearchParams()

    if(query.cursor) queryParameters.append("cursor",String(query.cursor))

    if(query.take) queryParameters.append("take", query.take.toString())

    if(query.search) queryParameters.append("search", query.search)

    return (await instance.get(`${path}?${queryParameters.toString()}`)).data
}