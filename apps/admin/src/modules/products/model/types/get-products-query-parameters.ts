import { ProductCondition } from "@autoball-frontend/shared-types";

export interface IGetProductsQueryParameters {
    condition?: ProductCondition,
    countItems?: number
    page: number
    isPrinted?: boolean | null
    brandId?: string | null
    seriesId?: string | null

}