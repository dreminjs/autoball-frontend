import { PostOrderForm } from './form/post-order-form';

export const PostOrderPage = () => {
  return (
    <div className='p-5'>
      <h3>
        Создание Заказа
      </h3>
      <PostOrderForm />
    </div>
  );
};
