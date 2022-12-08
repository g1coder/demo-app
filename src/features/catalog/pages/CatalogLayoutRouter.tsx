import {Suspense} from 'react';
import {Route} from 'react-router-dom';
import CatalogPage from 'features/catalog/pages/CatalogPage/CatalogPage';
import CatalogLayout from 'features/catalog/pages/CatalogLayout';
import CartPage from './CartPage/CartPage';
import AppRoutes from 'app/router/AppRoutes';

const route = (
  <Route
    path={AppRoutes.CATALOG.path}
    element={
      <Suspense>
          <CatalogLayout />
      </Suspense>
    }
    children={[
      <Route
        index
        key={AppRoutes.CATALOG.key}
        element={
          <Suspense>
            <CatalogPage />
          </Suspense>
        }
      />,
      <Route
        key={AppRoutes.CART.key}
        path={AppRoutes.CART.path}
        element={
          <Suspense>
            <CartPage />
          </Suspense>
        }
      />,
    ]}
  />
);

export default route;