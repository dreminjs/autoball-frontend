import { PostOrderForm } from './form/post-order-form';

export const PostOrderPage = () => {
  return (
    <div className='p-5 min-h-screen'>
      <h3 className='text-2xl mb-5'>
        Создание Заказа
      </h3>
      <PostOrderForm />
    </div>
  );
};
