import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { OrdersPage, PostOrderPage } from '../modules/orders';
import { PAGE_URLS, QUERY_KEYS } from '../shared/constants';
import {
  PostProductPage,
  ProductsPage,
  productsStore,
} from '../modules/products';
import { Provider } from 'jotai';
import { carBrandsStore } from '../modules/car-brands/model/atoms';
import { CarBrandSeriesPage } from '../modules/car-series/ui/car-brand-series-page';
import { brandSeriesStore } from '../modules/car-series/model/atoms';
import {
  DiscBrandPage,
  TireBrandPage,
  wheelComponentsStore,
} from '../modules/wheels';
import { CarBrandsPage } from '../modules/car-brands';
import { CarPartsPage } from '../modules/car-parts/ui/car-parts/car-parts-page';
import { carPartsStore } from '../modules/car-parts';
import { postProductsStore } from '../modules/products/model/post-products-atoms-page';
import { UsersPage } from '../modules/users/ui/users-page/users-page';
import { postOrdersStore } from '../modules/orders/model/post-page-atoms';
import { EditProductPage } from '../modules/products/ui/edit-product/edit-product-page';
import { EditOrderPage } from '../modules/orders/ui/edit-orders-page/edit-order-page';
import { editOrdersStore } from '../modules/orders/model/edit-page-atoms';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
        <Route path={PAGE_URLS.orders}>
          <Route index element={<OrdersPage />} />
          <Route
            path={QUERY_KEYS.post}
            element={
              <Provider store={postOrdersStore}>
                <PostOrderPage />
              </Provider>
            }
          />
           <Route
            path={QUERY_KEYS.edit}
            element={
              <Provider store={editOrdersStore}>
                <EditOrderPage />
              </Provider>
            }
          />
        </Route>

        <Route path={PAGE_URLS['product']}>
          <Route
            index
            element={
              <Provider store={productsStore}>
                <ProductsPage />
              </Provider>
            }
          />
          <Route
            path={`${QUERY_KEYS.post}`}
            element={
              <Provider store={postProductsStore}>
                <PostProductPage />
              </Provider>
            }
          />
          <Route
            path={`${QUERY_KEYS.edit}/:id`}
            element={
              <Provider store={postProductsStore}>
                <EditProductPage />
              </Provider>
            }
          />
        </Route>
        <Route
          path={PAGE_URLS['carpart']}
          element={
            <Provider store={carPartsStore}>
              <CarPartsPage />
            </Provider>
          }
        />
        <Route path={PAGE_URLS.user} element={<UsersPage />} />
        <Route path={PAGE_URLS.brand}>
          <Route
            path={`${QUERY_KEYS.disc}`}
            element={
              <Provider store={wheelComponentsStore}>
                <DiscBrandPage />
              </Provider>
            }
          />
          <Route
            path={`${QUERY_KEYS.tire}`}
            element={
              <Provider store={wheelComponentsStore}>
                <TireBrandPage />
              </Provider>
            }
          />
          <Route path={`${QUERY_KEYS.car}`}>
            <Route
              index
              element={
                <Provider store={carBrandsStore}>
                  <CarBrandsPage />
                </Provider>
              }
            />
            <Route
              path={PAGE_URLS['carseries']}
              element={
                <Provider store={brandSeriesStore}>
                  <CarBrandSeriesPage />
                </Provider>
              }
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
