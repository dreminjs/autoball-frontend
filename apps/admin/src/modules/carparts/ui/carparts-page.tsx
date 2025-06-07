import { useState } from 'react';
import { useGetCarParts } from '../model/api/queries';
import { CarPartsFilterDrawer } from './drawer/carparts-filter-drawer';
import { Toolbar } from './toolbar';
import { useAtomValue } from 'jotai';
import { conditionAtom } from '../model/store-page';

export const CarPartsPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const [search, setSearch] = useState<string>('');

  const condition = useAtomValue(conditionAtom);

  const { isSuccess, isPending, isError, data } = useGetCarParts({
    search,
    condition,
  });

  return (
    <>
      <Toolbar
        search={search}
        onShowDrawer={() => setIsDrawerVisible(true)}
        onSearch={(newValue: string) => setSearch(newValue)}
      />
      <CarPartsFilterDrawer
        isOpen={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
    </>
  );
};
