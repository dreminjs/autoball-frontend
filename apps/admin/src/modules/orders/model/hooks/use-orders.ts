import { useInView } from 'react-intersection-observer';
import { useGetOrders } from '../api/queries';
import { useEffect, useState } from 'react';
import { OrderStatus } from '@autoball-frontend/shared-types';

export const useOrder = () => {
  
    const [status,setStatus] = useState<OrderStatus>("open") 
    
    const {
    data,
    error,
    isError,
    isSuccess,
    isLoading,
    fetchNextPage,
    hasNextPage,
  } = useGetOrders({
    status,
  });

  const { inView, ref } = useInView();

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView]);

  return {
    states: {
      error,
      isError,
      isSuccess,
      isPending: isLoading,
    },
    data,
    ref,
    onChangeStatus: (data: OrderStatus) => setStatus(data),
    status 
  };
};
