import {useEffect} from 'react';
import {Outlet} from 'react-router-dom';
import {StyledContainer, StyledContent} from './styles';
import CatalogStore from '../store/CatalogStore';

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
