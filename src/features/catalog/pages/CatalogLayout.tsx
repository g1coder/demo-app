import React, {useEffect} from 'react';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'features/catalog/pages/CatalogLayoutStyles';
import {StyledMainLayoutWrapper} from 'app/pages/MainLayout/MainLayout';
import {Outlet} from 'react-router-dom';
import CatalogStore from 'features/catalog/store/CatalogStore';

const CatalogLayout = () => {
  useEffect(() => {
    CatalogStore.fetchFavoriteIds();
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
