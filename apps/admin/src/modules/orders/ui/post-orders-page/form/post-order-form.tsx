import { useForm } from 'react-hook-form';
import { InputField } from '../../../../../components';
import { TextareaField } from '../../../../../components/textarea-field/textarea-field';
import { Button } from '../../../../../components/buttons';
import { ChooseProductArticles } from '../../../../products/';
import { useChooseOrderProductInfo } from '../../../model/hooks/post-page/use-choose-order-product-info';
import { postOrderValidate } from '../../../model/lib/post-order-validate';
import { useNotificationActions } from '../../../../notifications';
import { zodResolver } from '@hookform/resolvers/zod';
import { PostOrderProductsSchema } from '../../../model/schemas/post-order-products.schema';
import { PostOrderProductsFormData } from '../../../model/types/dto';
import { usePostOrder } from '../../../model/api/queries';
import { ChoosedProductArticles } from '../../../../products/ui/choosed-product-artictes/ui/choosed-product-artictles';

export const PostOrderForm = () => {
  const { register, handleSubmit, formState, reset } =
    useForm<PostOrderProductsFormData>({
      resolver: zodResolver(PostOrderProductsSchema),
    });

  const notifications = useNotificationActions();

  const { totalPrice, choosedOrderProductsInfo, articles, onClearAll } =
    useChooseOrderProductInfo();

  const { mutate } = usePostOrder(() => {
    onClearAll();
    reset();
  });

  const onSubmit = handleSubmit((data) => {
    if (postOrderValidate(choosedOrderProductsInfo, notifications)) {
      mutate({
        product_articles: articles,
        order_data: data,
      });
    }
  });

  return (
    <form {...{ onSubmit }} className="w-[95%] mx-auto">
      <div className="grid grid-cols-3 grid-rows-2 gap-2">
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
        <InputField<PostOrderProductsFormData>
          label={'Почтовый индекс'}
          name={'postal_code'}
          register={register}
          error={formState.errors.postal_code?.message}
        />
        <InputField<PostOrderProductsFormData>
          label={'Город доставки'}
          name={'city_to_ship'}
          register={register}
          error={formState.errors.city_to_ship?.message}
        />
        <InputField<PostOrderProductsFormData>
          label={'Улица доставки'}
          name={'adress_to_ship'}
          register={register}
          error={formState.errors.adress_to_ship?.message}
        />
      </div>
      <TextareaField<PostOrderProductsFormData>
        label={'Описание'}
        name={'description'}
        register={register}
        marginBottom='25px'
      />
      <div className='flex gap-5 items-start justify-center'>
        <div className='w-[40%]'>
          <h3>Стоимость: {totalPrice}</h3>

          <ChoosedProductArticles />
        </div>
        <ChooseProductArticles />
      </div>
      <Button type="submit">Submit</Button>
    </form>
  );
};
