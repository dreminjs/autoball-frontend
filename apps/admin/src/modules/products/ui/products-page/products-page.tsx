import { useState } from 'react';
import { ProductsFilterDrawer } from './drawer/products-filter-drawer';
import { Toolbar } from './toolbar/toolbar';
import { ProductsList } from './list/products-list';
import { CarPartsQrList } from './list/products-qr-list';
import { useProducts } from '../../model/hooks/products/use-products';
import { useFilterCategories } from '../../model/hooks/products/use-filtration-categories';

export const ProductsPage = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const categories = useFilterCategories()

  const { states, data, ref } = useProducts(categories);

  return (
    <>
      <div>
        <Toolbar onShowDrawer={() => setIsDrawerVisible(true)} />

        <ProductsList
          libRef={ref}
          errorMessage={states.error?.response?.data.detail}
          response={data?.pages}
          isLoading={states.isPending}
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
