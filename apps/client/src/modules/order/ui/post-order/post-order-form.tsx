import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { orderSchema } from '../../model/schema';
import { OrderForm } from '../../model/types';
import { FormField } from '@/components/form-field';
import { FormTextarea } from '@/components/form-textarea';
import { usePostOrder } from '../../api/queries';

export const PostOrderForm = () => {
  const { register, handleSubmit } = useForm<OrderForm>({
    resolver: zodResolver(orderSchema),
  });

  const { mutate } = usePostOrder()

  return (
    <form className='' onSubmit={handleSubmit((data) => mutate(data))}>
      <FormField<OrderForm>
        label={'Ваше имя'}
        name={'user_name'}
        {...{ register }}
      />
      <FormField<OrderForm>
        label={'Ваш номер'}
        name={'user_phone'}
        {...{ register }}
      />

      <FormField<OrderForm>
        label={'Ваш город/поселок/село'}
        name={'city_to_ship'}
        {...{ register }}
      />

      <FormField<OrderForm>
        label={'Ваш адрес'}
        name={'adress_to_ship'}
        {...{ register }}
      />
      <FormField<OrderForm>
        label={'Ваше имя'}
        name={'postal_code'}
        {...{ register }}
      />
      <FormTextarea<OrderForm>
        label={'Описание'}
        name={'description'}
        {...{ register }}
      />

      <button className='p-2 border rounded-md' type="submit">Заказать</button>
    </form>
  );
};
