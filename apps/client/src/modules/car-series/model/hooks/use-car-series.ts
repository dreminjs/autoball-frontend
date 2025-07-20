import { useEffect } from 'react';
import { useGetCarSeriesByBrandId } from '../../api/queries';
import { useInView } from 'react-intersection-observer';

export const useCarSeries = (brandId: string | null) => {
  const { ref, inView } = useInView();

  const {
    data,
    isError,
    isLoading,
    error,
    fetchNextPage,
    hasNextPage,
    isSuccess,
  } = useGetCarSeriesByBrandId(brandId);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return {
    states: { isError, isPending: isLoading, error, isSuccess },
    data,
    inViewRef: ref,
  };
};