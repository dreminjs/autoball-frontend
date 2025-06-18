import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { ProtectedRoutes } from '../providers/protected-routes';
import { OrdersPage } from '../modules/orders';
import { PAGE_URLS, QUERY_KEYS } from '../shared/constants';
import { CarBrandsPage } from '../modules/car-brands';
import { PostProductPage, ProductsPage, productsStore } from '../modules/products';
import { Provider } from 'jotai';
import { carBrandsStore } from '../modules/car-brands/model/store-page';
import { CarBrandSeriesPage } from '../modules/brand-series/ui/car-brand-series-page';
import { DevTools } from 'jotai-devtools'
import 'jotai-devtools/styles.css'

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />

        <Route element={<ProtectedRoutes />}>
          <Route path={PAGE_URLS.orders} element={<OrdersPage />} />

          <Route path={PAGE_URLS['car-brands']}>
            <Route
              index
              element={
                <Provider store={carBrandsStore}>
                  <DevTools store={carBrandsStore} />
                  <CarBrandsPage />
                </Provider>
              }
            />
            <Route
              path={PAGE_URLS['carseries']}
              element={<CarBrandSeriesPage />}
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
              element={<PostProductPage />}
            />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
