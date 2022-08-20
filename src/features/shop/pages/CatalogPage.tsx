import React from 'react';
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import IBaseProduct from 'features/shop/models/IBaseProduct';
import ProductCard from 'features/shop/components/ProductCard/ProductCard';
import FilterPanel from 'features/shop/components/FilterPanel/FilterPanel';
import {LANDING_PAGE_HEADER_HEIGHT} from 'app/constants/constants';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';

const products: IBaseProduct[] = Array.from(Array(8)).map((i) => ({
  id: `${i}`,
  name: `Product ${i}`,
  price: 10 * i,
  imageUrl: '',
}));

const StyledContainer = styled('div')(() => ({
  background: 'linear-gradient(90deg, rgba(255,255,255,1) 17%, rgba(223,222,217,1) 55%, rgba(255,255,255,1) 88%)',
  position: 'absolute',
  top: LANDING_PAGE_HEADER_HEIGHT,
  left: 0,
  right: 0,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
}));

const StyledContentContainer = styled('div')(() => ({
  position: 'relative',
  zIndex: 3,
  paddingBottom: 40,
}));

const CatalogPage = () => {
  return (
    <StyledMainLayoutWrapper>
      <StyledContainer />
      <StyledContentContainer>
        <Grid container columns={{xs: 1, sm: 1, md: 1, xl: 12}} spacing={2} flexWrap="nowrap">
          <Grid item xl="auto" display={{xs: 'none', xl: 'block'}}>
            <FilterPanel />
          </Grid>

          <Grid
            container
            item
            xs={12}
            xl={9}
            rowSpacing={{xs: 2, xl: 4}}
            columnSpacing={{xs: 1, sm: 2, md: 4}}
            columns={{xs: 1, sm: 1, md: 4, xl: 9}}
          >
            {products.map((p) => (
              <Grid item key={p.name} xs={1} sm={1} md={2} xl={3}>
                <ProductCard item={p} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </StyledContentContainer>
    </StyledMainLayoutWrapper>
  );
};

export default CatalogPage;
