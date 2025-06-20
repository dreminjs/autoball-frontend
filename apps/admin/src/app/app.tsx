import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { ProtectedRoutes } from '../providers/protected-routes';
import { OrdersPage } from '../modules/orders';
import { PAGE_URLS, QUERY_KEYS } from '../shared/constants';
import { CarBrandsPage } from '../modules/car-brands';
import {
  PostProductPage,
  ProductsPage,
  productsStore,
} from '../modules/products';
import { Provider } from 'jotai';
import { carBrandsStore } from '../modules/car-brands/model/atoms';
import { CarBrandSeriesPage } from '../modules/brand-series/ui/car-brand-series-page';
import { brandSeriesStore } from '../modules/brand-series/model/atoms';
import { DiscBrandPage, TireBrandPage, wheelComponentsStore } from '../modules/wheel/';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={PAGE_URLS.orders} element={<OrdersPage />} />
          <Route
            path={PAGE_URLS['carseries']}
            element={
              <Provider store={brandSeriesStore}>
                <CarBrandSeriesPage />
              </Provider>
            }
          />
          <Route path={PAGE_URLS['product']}>
            <Route
              index
              element={
                <Provider store={productsStore}>
                  <ProductsPage />
                </Provider>
              }
            />
            <Route path={`${QUERY_KEYS.post}`} element={<PostProductPage />} />
          </Route>
        </Route>

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
          <Route
            index
            path={`${QUERY_KEYS.car}`}
            element={
              <Provider store={carBrandsStore}>
                <CarBrandsPage />
              </Provider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}
