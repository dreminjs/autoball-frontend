interface IStates {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
}

interface IStatesMessages {
  error?: string;
  success?: string;
  pending?: string;
}

export const getSnackbarMessage = (
  states: IStates,
  messages: IStatesMessages
): string | null => {
  const { isError, isPending, isSuccess } = states;

  switch (true) {
    case isError:
      return messages.error || 'Что-то пошло не так'
    case isPending:
      return messages.pending || "Загрузка..."
    case isSuccess:
      return messages.success || "Успех!"
  }

  return null;
};
