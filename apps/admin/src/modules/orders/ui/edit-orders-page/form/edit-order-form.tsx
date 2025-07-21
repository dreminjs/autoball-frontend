import { useForm } from 'react-hook-form';
import { InputField } from '../../../../../components';
import { TextareaField } from '../../../../../components/textarea-field/textarea-field';
import { Button } from '../../../../../components/buttons';
import { ChooseProductArticles } from '../../../../products';
import { useChooseOrderProductInfo } from '../../../model/hooks/post-page/use-choose-order-product-info';
import { postOrderValidate } from '../../../model/lib/post-order-validate';
import { useNotificationActions } from '../../../../notifications';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostOrderProductsSchema } from '../../../model/schemas/post-order-products.schema';
import { PostOrderProductsFormData } from '../../../model/types/dto';
import { usePostOrder } from '../../../model/api/queries';

export const PostOrderForm = () => {
  const { register, handleSubmit, formState, reset } =
    useForm<PostOrderProductsFormData>({
      resolver: zodResolver(PostOrderProductsSchema),
    });

  const notifications = useNotificationActions();

  const { totalPrice, choosedOrderProductsInfo, onClearAll, ids } =
    useChooseOrderProductInfo();

  const { mutate } = usePostOrder(() => {
    onClearAll();
    reset();
  });

  const onSubmit = handleSubmit((data) => {
    if (postOrderValidate(choosedOrderProductsInfo, notifications)) {
      mutate({ order_data: { ...data }, product_ids: ids });
    }
  });

  return (
    <form {...{ onSubmit }} className="w-[420px] mx-auto space-y-3">
      <InputField<PostOrderProductsFormData>
        label={'Номер телефона'}
        name={'user_phone'}
        register={register}
        error={formState.errors.user_phone?.message}
      />
      <InputField<PostOrderProductsFormData>
        label={'Имя клиента'}
        name={'user_name'}
        register={register}
        error={formState.errors.user_name?.message}
      />
      <TextareaField<PostOrderProductsFormData>
        label={'Описание'}
        name={'description'}
        register={register}
      />
      <h3>Стоимость: {totalPrice}</h3>
      <ChooseProductArticles />
      <Button type="submit">Submit</Button>
    </form>
  );
};
