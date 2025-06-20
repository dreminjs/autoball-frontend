import { useEffect, useRef, useState } from 'react';
import { useGetCarBrands } from '../../api/queries';

export const useCarBrands = (inView: boolean) => {
  const [search, setSearch] = useState('');

  const hasFetchedInitial = useRef(false);

  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage } =
    useGetCarBrands({
      search,
      limit: 10
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
    search,
    refetch,
    states: {
      isError,
      isPending,
      isSuccess,
      error,
    },
  };
};
