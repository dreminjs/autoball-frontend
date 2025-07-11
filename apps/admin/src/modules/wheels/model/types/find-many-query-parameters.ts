import { IInfinityScrollQueryParametersDto } from "../../../../shared";




export interface IFindManyQueryParameters extends IInfinityScrollQueryParametersDto {
    search?: string
}