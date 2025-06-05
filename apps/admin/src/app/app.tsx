import { Route, Routes } from 'react-router-dom';
import { Layout } from '../layouts/layout';
import { SigninPage } from '../modules/signin';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<SigninPage />} />
      </Route>
    </Routes>
  );
}

export default App;
