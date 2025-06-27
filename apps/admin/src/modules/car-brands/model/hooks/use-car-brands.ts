import { useEffect, useState } from 'react';
import { useGetCarBrands } from '../../api/queries';
import { useDebounce } from "use-debounce"
import { useInView } from 'react-intersection-observer';

export const useCarBrands = () => {
  const [search, setSearch] = useState('');

  const {inView, ref} = useInView()

  const [debouncedSearchValue] = useDebounce(search, 250)


  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage, hasNextPage } =
    useGetCarBrands({
      search: debouncedSearchValue,
      limit: 10
    });

  const handleChangeSearchValue = (newValue: string) => setSearch(newValue);
   
  useEffect(() => {
    if (inView && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView, hasNextPage]);

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
    inViewRef: ref
  };
};
