export function getSnackbarMessage(
  states: {
    isError: boolean;
    isPending: boolean;
    isSuccess: boolean;
  },
  { error = 'Ошибка!' }: { error?: string } = {}
) {
  switch (true) {
    case states.isSuccess:
      return 'Успех!';
    case states.isPending:
      return 'Загрузка...';
    case states.isError:
      return error;
    default:
       return "..."
  }
}
