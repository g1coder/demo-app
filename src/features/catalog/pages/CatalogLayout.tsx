import React from 'react';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'features/catalog/pages/CatalogLayoutStyles';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {Outlet} from 'react-router-dom';

const CatalogLayout = () => {
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
