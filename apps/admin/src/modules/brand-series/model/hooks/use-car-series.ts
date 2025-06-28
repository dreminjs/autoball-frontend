import { useEffect } from 'react';
import { useGetCarSeriesByBrandId } from '../../api/queries';
import { useInView } from 'react-intersection-observer';

export const useCarSeries = (brandId: string | null ) => {
  const { ref, inView } = useInView();

  const { data, isError, isPending, error, fetchNextPage, hasNextPage, isSuccess } =
    useGetCarSeriesByBrandId(brandId);

  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, hasNextPage]);

  return {
    states: { isError, isPending, error: error?.response?.data.detail || "Error!", isSuccess },
    data,
    inViewRef: ref,
  };
};
