import { useEffect, useRef, useState } from 'react';
import { useGetCarBrands } from '../../../../shared/api/brand/queries';

export const useCarBrands = (inView: boolean) => {
  const [search, setSearch] = useState('');

  const hasFetchedInitial = useRef(false);

  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage } =
    useGetCarBrands({
      search,
    });

  const handleChangeSearchValue = (newValue: string) => setSearch(newValue);

  useEffect(() => {
    if (inView && !hasFetchedInitial.current) {
      hasFetchedInitial.current = true;
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
   
  useEffect(() => {
    if (inView && hasFetchedInitial.current) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return {
    onChangeSearchValue: handleChangeSearchValue,
    data,
    error,
    search,
    refetch,
    states: {
      isError,
      isPending,
      isSuccess,
    },
  };
};
