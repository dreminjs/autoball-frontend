import { Route, Routes } from 'react-router-dom';
import { Layout } from '../components/layout/layout';
import { SigninPage } from '../modules/signin';
import { ProtectedRoutes } from '../providers/protected-routes';
import { OrdersPage } from '../modules/orders';
import { PAGE_URLS } from '../shared/constants';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
        <Route element={<ProtectedRoutes/>}>
            <Route path={PAGE_URLS.orders} element={<OrdersPage/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
