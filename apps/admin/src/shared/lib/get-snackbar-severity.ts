import { AlertColor, AlertPropsColorOverrides } from "@mui/material/Alert";
import { OverridableStringUnion } from "@mui/types";

export const getSnackbarSeverity = (states: {
  isError: boolean;
  isPending: boolean;
  isSuccess: boolean;
}): OverridableStringUnion<AlertColor, AlertPropsColorOverrides> => {
  switch (true) {
    case states.isError:
      return 'error';
    case states.isPending:
      return 'info';
    case states.isSuccess:
      return 'success';
    default:
      return 'warning';
  }
};
