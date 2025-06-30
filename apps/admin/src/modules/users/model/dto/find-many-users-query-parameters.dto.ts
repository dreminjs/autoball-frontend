import { Role } from "@autoball-frontend/shared-types";
import { IInfinityScrollQueryParametersDto } from "../../../../shared";



export interface IFindManyUsersQueryParametersDto extends IInfinityScrollQueryParametersDto {
    name: string
    phone_number: string
    status: "active" | "banned" | null
    role: Role | null

}