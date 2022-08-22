import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CatalogPage from 'features/shop/pages/CatalogPage/CatalogPage';
import CatalogLayout from 'features/shop/pages/CatalogLayout';

interface IProps {}

const CatalogLayoutRouter = (props: IProps) => {
  return (
    <Routes>
      <Route element={<CatalogLayout />}>
        <Route index element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};

export default CatalogLayoutRouter;
