import { IToggleStatusDto } from "../../../../shared";

export interface IToggleScanStatusDto extends IToggleStatusDto {
  is_printed: boolean;
}
