import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {LayoutWrapper} from 'widgets';
import {StyledContainer, StyledContent} from './styles';
import CatalogStore from '../store';

const CatalogLayout = () => {
  useEffect(() => {
    CatalogStore.fetchFavoriteIds();
  }, []);

  return (
    <LayoutWrapper>
      <StyledContainer />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </LayoutWrapper>
  );
};

export default CatalogLayout;
