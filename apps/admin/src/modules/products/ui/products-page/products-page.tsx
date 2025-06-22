import { useState } from 'react';
import { useGetProducts } from '../../model/api/queries';
import { CarPartsFilterDrawer } from './drawer/products-filter-drawer';
import { Toolbar } from './toolbar';
import { ProductsList } from './list/products-list';
import { CarPartsQrList } from './list/products-qr-list';

export const ProductsPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { isSuccess, isPending, isError, data, error } = useGetProducts();

  return (
    <>
      <div>
        <Toolbar onShowDrawer={() => setIsDrawerVisible(true)} />

        <ProductsList
          errorMessage={error?.response?.data.detail}
          response={data?.pages}
          isLoading={isPending}
        />
        <CarPartsQrList response={data?.pages} />
      </div>
      <CarPartsFilterDrawer
        isOpen={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
    </>
  );
};
