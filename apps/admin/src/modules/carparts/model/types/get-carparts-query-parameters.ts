import { ProductCondition } from "@autoball-frontend/shared-types";

export interface IGetCarPartsQueryParameters {
    condition: ProductCondition,
    search: string
}