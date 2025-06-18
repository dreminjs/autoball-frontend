import { AlertColor, AlertPropsColorOverrides } from "@mui/material/Alert";
import { OverridableStringUnion } from "@mui/types";

interface SnackbarStates {
  postCarBrandIsPending: boolean;
  postPhotoIsPending: boolean;
  postCarBrandIsError: boolean;
  postPhotoIsError: boolean;
  postCarBrandIsSuccess: boolean;
  postPhotoIsSuccess: boolean;
}

export const getSnackbarSeverity = ({
  isError,
  isPending,
}: {
  isError: boolean;
  isPending: boolean;
}): OverridableStringUnion<AlertColor, AlertPropsColorOverrides> => {
  if (isError) return 'error';
  if (isPending) return 'info';
  return "success"
};

export const getSnackbarMessage = (states: SnackbarStates): string => {
  const {
    postCarBrandIsPending,
    postPhotoIsPending,
    postCarBrandIsError,
    postPhotoIsError,
    postCarBrandIsSuccess,
    postPhotoIsSuccess,
  } = states;

  if (postCarBrandIsPending) return "Отправка данных о марке автомобиля...";
  if (postPhotoIsPending) return "Отправка фотографии...";
  if (postCarBrandIsError) return "Ошибка при отправке данных о марке автомобиля";
  if (postPhotoIsError) return "Ошибка при отправке фотографии";
  if (postCarBrandIsSuccess) return "Данные о марке автомобиля успешно отправлены";
  if (postPhotoIsSuccess) return "Фотография успешно отправлена";
  return "";
};