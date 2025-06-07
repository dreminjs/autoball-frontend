import { useState } from 'react';
import { useGetCarBrands } from '../../../../../shared/api/brand/queries';
import { BrandList } from './list/brand-list';

export const ChooseBrand = () => {
  const [search, setSearch] = useState('');

  const { data } = useGetCarBrands({ search });

  return (
    <div>
      <input
        type="text"
        defaultValue={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <BrandList items={data} />
    </div>
  );
};
