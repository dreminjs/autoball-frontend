import { useState, useRef, useEffect } from 'react';
import { useGetWheelBrands } from '../../api/queries';
import { useInView } from 'react-intersection-observer';
import { WheelComponent } from '@autoball-frontend/shared-types';

export const useWheelComponentsBrands = (type?: WheelComponent) => {
  const [search, setSearch] = useState('');

  const { ref, inView } = useInView();

  const hasFetchedInitial = useRef(false);

  const { data, isError, isPending, isSuccess, error, refetch, fetchNextPage } =
    useGetWheelBrands(
      {
        search,
        take: 10,
      },
      type
    );

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
    inViewRef: ref,
  };
};
