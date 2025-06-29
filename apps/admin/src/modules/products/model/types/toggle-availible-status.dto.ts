import { IToggleStatusDto } from "../../../../shared";

export interface IToggleAvailableStatusDto extends IToggleStatusDto {
    is_available: boolean
}