import { QUERY_KEYS, SERVICE_URLS } from "@/shared/constants"
import { useQuery } from "@tanstack/react-query"
import { findMany } from "./service"
import { useFilterCategories } from "../model/hooks/use-filtration-categories"




export const useGetProducts = (currentPage: number) => {

    const filterCategories = useFilterCategories()

    return useQuery({
        queryKey: [SERVICE_URLS.product,QUERY_KEYS.public,currentPage, Object.values(filterCategories)],
        queryFn: () => findMany()
    })
}