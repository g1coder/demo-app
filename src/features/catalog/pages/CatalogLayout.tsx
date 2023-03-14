import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {StyledMainLayoutWrapper} from 'app/pages/MainLayout/MainLayout';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'features/catalog/pages/CatalogLayoutStyles';
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
