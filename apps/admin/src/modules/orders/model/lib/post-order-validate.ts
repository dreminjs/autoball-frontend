import { useNotificationActions } from '../../../notifications';
import { IOrderProductInfo } from '../types/dto';

export const postOrderValidate = (
  data: IOrderProductInfo[],
  notification: ReturnType<typeof useNotificationActions>
) => {
  if (data.length === 0) {
    notification.addError({message: "Добавте продукт"});
    return false
  }

  return true
};
