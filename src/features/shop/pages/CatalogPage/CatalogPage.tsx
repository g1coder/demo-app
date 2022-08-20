import React from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {StyledContainer, StyledContentContainer} from 'features/shop/pages/CatalogPage/CatalogPageStyles';
import ProductCard from 'features/shop/components/ProductCard/ProductCard';
import FilterPanel from 'features/shop/components/FilterPanel/FilterPanel';
import useFetch from 'core/hooks/useFetch';
import CatalogService from 'features/shop/services/CatalogService';
import IBaseProduct from 'features/shop/models/IBaseProduct';
import Spinner from 'core/components/Spinner';
import CartStore from 'store/CartStore';

const CatalogPage = observer(() => {
  const [products] = useFetch<IBaseProduct[]>(
    {
      fetch: (params) => CatalogService.getList(params),
      data: [],
    },
    []
  );

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
            {products.loading ? (
              <Spinner />
            ) : (
              products.data.map((product) => (
                <Grid item key={product.name} xs={1} sm={1} md={2} xl={3}>
                  <ProductCard
                    product={product}
                    ordered={CartStore.products.filter((p) => p.name === product.name).length}
                  />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </StyledContentContainer>
    </StyledMainLayoutWrapper>
  );
});

export default CatalogPage;
