import { useParams } from 'react-router-dom';
import { PostOrderForm } from './form/edit-order-form';
import { useGetOrder } from '../../model/api/queries';
import { useSetAtom } from 'jotai';
import { orderProductInfoAtom } from '../../model/edit-page-atoms';
import { useEffect } from 'react';

export const EditOrderPage = () => {

  const { id } = useParams()

  const setOrderProductInfo = useSetAtom(orderProductInfoAtom)

  const {isSuccess,data} = useGetOrder(id)

  useEffect(() => {
    // if(isSuccess) {
    //   setOrderProductInfo((prev) => [...prev,{
    //     article: data.
    //   }])
    // }
  },[isSuccess, data])
  
  return (
    <div className='p-5'>
      <h3>
        Редактирование Заказа {id}
      </h3>
      <PostOrderForm />
    </div>
  );
};
