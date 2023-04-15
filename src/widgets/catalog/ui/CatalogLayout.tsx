import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import CatalogStore from '../store/CatalogStore';
import {StyledContainer, StyledContent} from './styles';

const CatalogLayout = () => {
  useEffect(() => {
    CatalogStore.fetchFavoriteIds();
  }, []);

  return (
    <>
      <StyledContainer />
      <StyledContent>
        <Outlet />
      </StyledContent>
    </>
  );
};

export default CatalogLayout;
