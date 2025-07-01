import { useInView } from 'react-intersection-observer';
import { useGetProducts } from '../../api/queries';
import { useEffect } from 'react';
import { IGetProductsQueryParameters } from '../../types/get-products-query-parameters';

export const useProducts = (categories: IGetProductsQueryParameters) => {
  const { inView, ref } = useInView();

  const {
    isPending,
    data,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
    isError,
  } = useGetProducts({ ...categories  });


  useEffect(() => {
    if (inView && hasNextPage) {
      console.log('In view');
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return { states: { isPending, isSuccess, isError, error }, data, ref };
};
