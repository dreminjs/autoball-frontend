import { useState } from 'react';
import { useGetCarBrands } from '../../../../shared/api/brand/queries';

export const useCarBrands = () => {
  const [search, setSearch] = useState('');

  const { data, isError, isPending, isSuccess, error, refetch } =
    useGetCarBrands({
      search,
    });

  const handleChangeSearchValue = (newValue: string) => setSearch(newValue);

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
