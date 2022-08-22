import React from 'react';
import {StyledCatalogLayoutContainer, StyledCatalogLaouytContent} from 'features/shop/pages/CatalogLayoutStyles';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {Outlet} from 'react-router-dom';

interface IProps {}

const CatalogLayout = (props: IProps) => {
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
