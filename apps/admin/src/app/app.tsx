import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { ProtectedRoutes } from '../providers/protected-routes';
import { OrdersPage } from '../modules/orders';
import { PAGE_URLS } from '../shared/constants';
import { CarBrandsPage } from '../modules/car-brands/ui/car-brands-page';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
        <Route element={<ProtectedRoutes/>}>
            <Route path={PAGE_URLS.orders} element={<OrdersPage/>}/>
            <Route path={PAGE_URLS['car-brands']} element={<CarBrandsPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
