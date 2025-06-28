import { useState, useRef, useEffect } from "react";
import { useGetCarParts } from "../../api/queries";
import { useInView } from "react-intersection-observer";

export const useCarParts = () => {

  const {inView, ref} = useInView()

  const [search, setSearch] = useState('');

  const hasFetchedInitial = useRef(false);

  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage } =
    useGetCarParts({
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
      error: error?.response?.data.detail || "Error!" ,
    },
    inViewRef: ref
  };
};
