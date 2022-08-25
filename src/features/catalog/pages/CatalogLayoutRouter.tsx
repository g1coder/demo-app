import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CatalogPage from 'features/catalog/pages/CatalogPage/CatalogPage';
import CatalogLayout from 'features/catalog/pages/CatalogLayout';
import CatalogRoutes from '../contants/CatalogRoutes';
import CartPage from './CartPage/CartPage';

const CatalogLayoutRouter = () => {
  return (
    <Routes>
      <Route element={<CatalogLayout />}>
        <Route index element={<CatalogPage />} />
        <Route path={CatalogRoutes.CATALOG_CART.path} element={<CartPage />} />
      </Route>
    </Routes>
  );
};

export default CatalogLayoutRouter;
