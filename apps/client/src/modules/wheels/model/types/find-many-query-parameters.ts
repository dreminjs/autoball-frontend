import { IInfinityScrollQueryParametersDto } from "@/shared/types/infinity-scroll-query-parameters.dto";

export interface IFindManyQueryParameters extends IInfinityScrollQueryParametersDto {
    search?: string
}