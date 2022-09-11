import React, {useEffect} from 'react';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'features/catalog/pages/CatalogLayoutStyles';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {Outlet} from 'react-router-dom';
import CartStore from 'store/CartStore';

const CatalogLayout = () => {
  useEffect(() => {
    CartStore.fetchAvailableProducts();
  }, []);

  return (
    <StyledMainLayoutWrapper>
      <StyledCatalogLayoutContainer />
      <StyledCatalogLaouytContent>
        <Outlet />
      </StyledCatalogLaouytContent>
    </StyledMainLayoutWrapper>
  );
};

export default CatalogLayout;
