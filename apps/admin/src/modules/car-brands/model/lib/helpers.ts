
interface IPostCarBrandSnackbarStates {
  postCarBrandIsPending: boolean;
  postPhotoIsPending: boolean;
  postCarBrandIsError: boolean;
  postPhotoIsError: boolean;
  postCarBrandIsSuccess: boolean;
  postPhotoIsSuccess: boolean;
}

interface IDeleteCarBrandSnackbarStates {
  isSuccess: boolean;
  isPending: boolean;
  isError: boolean;
}

export const getPostCarBrandSnackbarMessage = (
  states: IPostCarBrandSnackbarStates
): string | null => {
  const {
    postCarBrandIsPending,
    postPhotoIsPending,
    postCarBrandIsError,
    postPhotoIsError,
    postCarBrandIsSuccess,
    postPhotoIsSuccess,
  } = states;

  if (postCarBrandIsPending) return 'Отправка данных о марке автомобиля...';
  if (postPhotoIsPending) return 'Отправка фотографии...';
  if (postCarBrandIsError)
    return 'Ошибка при отправке данных о марке автомобиля';
  if (postPhotoIsError) return 'Ошибка при отправке фотографии';
  if (postCarBrandIsSuccess)
    return 'Данные о марке автомобиля успешно отправлены';
  if (postPhotoIsSuccess) return 'Фотография успешно отправлена';
  return null;
};

export const getDeleteCarBrandSnackbarMessage = (
  states: IDeleteCarBrandSnackbarStates
): string | null => {
  switch (true) {
    case states.isError:
      return 'Что-то пошло не так!';
    case states.isSuccess:
      return 'Успех!';
    case states.isPending:
      return 'Загрузка';
    default:
      return null;
  }
};
