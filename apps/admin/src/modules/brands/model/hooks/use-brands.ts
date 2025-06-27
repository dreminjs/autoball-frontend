import { useState, useEffect } from 'react';
import { useDebounce } from 'use-debounce';
import { useGetBrands } from '../api/brand/queries';
import { BrandType } from '../../../../shared/interfaces/brands/type';
import { useInView } from 'react-intersection-observer';

export const useBrands = (type: BrandType) => {
  const [search, setSearch] = useState('');

  const [debouncedSearchValue] = useDebounce(search, 250);

  const { inView, ref } = useInView();

  const {
    data,
    isError,
    isPending,
    isSuccess,
    error,
    refetch,
    fetchNextPage,
    hasNextPage,
  } = useGetBrands({
    search: debouncedSearchValue,
    type,
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
    inViewRef: ref,
    states: {
      isError,
      isPending,
      isSuccess,
      error: error?.response?.data.detail,
    },
  };
};
