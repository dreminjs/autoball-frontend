import { Currency } from "@autoball-frontend/shared-types"
import { useQuery } from "@tanstack/react-query"
import { findOne } from "./service"

interface IArgs {
    from: Extract<Currency, "USD" | "PLN">
    to: Extract<Currency, "EUR" | "BYN" | "RUB">
}

export const useGetCurrency = (args: IArgs) => {

    // return useQuery({
    //     queryFn: () => findOne(args.)
    // })

}   