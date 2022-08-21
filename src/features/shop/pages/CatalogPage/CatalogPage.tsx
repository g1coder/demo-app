import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid, Typography} from '@mui/material';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {
  StyledContainer,
  StyledContentContainer,
  StyledMetaContainer,
} from 'features/shop/pages/CatalogPage/CatalogPageStyles';
import ProductCard from 'features/shop/components/ProductCard/ProductCard';
import FilterPanel from 'features/shop/components/FilterPanel/FilterPanel';
import useFetch from 'core/hooks/useFetch';
import CatalogService from 'features/shop/services/CatalogService';
import IBaseProduct from 'features/shop/models/IBaseProduct';
import Spinner from 'core/components/Spinner';
import CartStore from 'store/CartStore';
import IProductParams from 'features/shop/models/IProductParams';

const CatalogPage = observer(() => {
  const [params, setParams] = useState<IProductParams>();

  const [products] = useFetch<IBaseProduct[]>(
    {
      fetch: () => CatalogService.getList(params),
      data: [],
    },
    [params]
  );

  return (
    <StyledMainLayoutWrapper>
      <StyledContainer />
      <StyledContentContainer>
        <Grid container columns={{xs: 1, sm: 1, md: 1, xl: 12}} spacing={2} flexWrap="nowrap">
          <Grid item xl="auto" display={{xs: 'none', xl: 'block'}}>
            <FilterPanel tags={['lemon', 'mineral', 'pack', 'soda']} priceRange={{max: 50}} onChange={setParams} />
          </Grid>

          <Grid item container xs={12} xl={9}>
            <Grid item xs={12}>
              <StyledMetaContainer>
                {!products.loading && (
                  <Typography variant="body1" color="primary.dark">
                    {products.ready ? `Showing ${products.data.length} items` : ''}
                  </Typography>
                )}
              </StyledMetaContainer>
            </Grid>

            <Grid container item xs={12} rowSpacing={2} columnSpacing={2} columns={{xs: 1, sm: 1, md: 4, xl: 9}}>
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
        </Grid>
      </StyledContentContainer>
    </StyledMainLayoutWrapper>
  );
});

export default CatalogPage;
