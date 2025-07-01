import { useState } from 'react';
import { ProductsFilterDrawer } from './drawer/products-filter-drawer';
import { Toolbar } from './toolbar/toolbar';
import { ProductsList } from './list/products-list';
import { CarPartsQrList } from './list/products-qr-list';
import { useProducts } from '../../model/hooks/products/use-products';

export const ProductsPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const { error, data, isPending, ref } = useProducts();

  return (
    <>
      <div>
        <Toolbar onShowDrawer={() => setIsDrawerVisible(true)} />

        <ProductsList
          libRef={ref}
          errorMessage={error?.response?.data.detail}
          response={data?.pages}
          isLoading={isPending}
        />
        <CarPartsQrList response={data?.pages} />
      </div>
      <ProductsFilterDrawer
        isOpen={isDrawerVisible}
        onClose={() => setIsDrawerVisible(false)}
      />
    </>
  );
};
