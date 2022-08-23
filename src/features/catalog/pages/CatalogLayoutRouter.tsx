import React from 'react';
import {Route, Routes} from 'react-router-dom';
import CatalogPage from 'features/catalog/pages/CatalogPage/CatalogPage';
import CatalogLayout from 'features/catalog/pages/CatalogLayout';

const CatalogLayoutRouter = () => {
  return (
    <Routes>
      <Route element={<CatalogLayout />}>
        <Route index element={<CatalogPage />} />
      </Route>
    </Routes>
  );
};

export default CatalogLayoutRouter;
