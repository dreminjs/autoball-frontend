import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { ProtectedRoutes } from '../providers/protected-routes';
import { OrdersPage } from '../modules/orders';
import { PAGE_URLS } from '../shared/constants';
import { CarBrandsPage } from '../modules/car-brands';
import { CarPartsPage } from '../modules/carparts';
import { Provider } from 'jotai';
import { storePage } from '../modules/carparts/model/store-page';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
        <Route element={<ProtectedRoutes />}>
          <Route path={PAGE_URLS.orders} element={<OrdersPage />} />
          <Route path={PAGE_URLS['car-brands']} element={<CarBrandsPage />} />
          <Route
            path={PAGE_URLS.carparts}
            element={
              <Provider store={storePage}>
                <CarPartsPage />
              </Provider>
            }
          />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
