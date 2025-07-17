import { useState, useEffect } from "react";
import { useGetCarParts } from "../../api/queries";
import { useInView } from "react-intersection-observer";
import { useDebounce } from "use-debounce";

export const useCarParts = () => {

  const {inView, ref} = useInView()

  const [search, setSearch] = useState('');

  const [debouncedSearchValue] = useDebounce(search,400)

  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage } =
    useGetCarParts({
      search: debouncedSearchValue,
      limit: 10
    });

  const handleChangeSearchValue = (newValue: string) => setSearch(newValue);

  useEffect(() => {
    if (inView) {
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
    inViewRef: ref
  };
};
