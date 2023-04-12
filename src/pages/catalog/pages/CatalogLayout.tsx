import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {StyledMainLayoutWrapper} from 'pages/MainLayout/MainLayout';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'pages/catalog/pages/CatalogLayoutStyles';
import CatalogStore from 'pages/catalog/store/CatalogStore';

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
