import { ProductCondition } from "@autoball-frontend/shared-types";

export interface IGetProductsQueryParameters {
    condition?: ProductCondition,
    countItems?: number
    isPrinted?: boolean | null
}