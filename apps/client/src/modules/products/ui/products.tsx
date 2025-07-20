import { IProduct } from '@autoball-frontend/shared-types';
import { ProductFilterSidebar } from './filtration/product-filter-sidebar';
import { FC } from 'react';
import { ProductsList } from './products-list';
import { CartWarning } from '@/modules/cart/ui/cart-warning';

interface IProps {
  products: IProduct[];
}

export const ProductsPage: FC<IProps> = ({ products }) => {
  return (
    <>
      <div className="flex gap-5 relative w-full">
        <ProductFilterSidebar />
        <div className="w-full">
          <ProductsList items={products} />
        </div>
      <CartWarning />
      </div>
    </>
  );
};
