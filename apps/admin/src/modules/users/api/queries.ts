import { useQuery } from "@tanstack/react-query"
import { SERVICE_URLS } from "../../../shared/constants"
import { findMany, findOne } from "./services"




export const useGetUsers = () => {


    return useQuery({
        queryKey: [SERVICE_URLS.user],
        queryFn: () => findMany()
    })
}


export const useGetUser = (id: string) => {


    return useQuery({
        queryKey: [SERVICE_URLS.user, id],
        queryFn: () => findOne(id)
    })
}