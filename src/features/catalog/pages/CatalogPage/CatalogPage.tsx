import _ from 'lodash';
import React, {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid, Typography} from '@mui/material';
import {StyledFilterChip, StyledMetaContainer} from 'features/catalog/pages/CatalogPage/CatalogPageStyles';
import ProductCard from 'features/catalog/components/ProductCard/ProductCard';
import FilterPanel from 'features/catalog/components/FilterPanel/FilterPanel';
import useFetch from 'core/hooks/useFetch';
import CatalogService from 'features/catalog/services/CatalogService';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import Spinner from 'core/components/Spinner';
import CartStore from 'store/CartStore';
import IProductParams from 'features/catalog/models/IProductParams';
import IList from 'core/models/IList';

const initialFilters = {
  tags: ['lemon', 'mineral', 'pack', 'soda'],
  min: 0,
  max: 50,
};

const CatalogPage = observer(() => {
  const [filterParams, setFilterParams] = useState<IProductParams>();

  const [{data: products, ready: productsReady, loading: productsLoading}] = useFetch<IList<IBaseProduct> | null>(
    {
      fetch: () => CatalogService.getList(filterParams).then(response => {
        CartStore.setAvailableProducts(response);
        return response;
      }),
      data: null,
    },
    [filterParams]
  );

  const metaTitle = useMemo(() => {
    if (productsLoading || !products) {
      return '';
    }
    if (products && !products.length) {
      return 'No items';
    }

    return products.length === products.$meta.total_count
      ? `Showing ${products.length}`
      : `Showing ${products.length} from ${products.$meta.total_count}`;
  }, [products, productsLoading]);

  const handleResetFilter = useCallback((property: keyof IProductParams) => {
    setFilterParams((currentValue) => {
      return {...currentValue, [property]: undefined};
    });
  }, []);

  const renderFilterChips = useMemo(() => {
    if (!filterParams) return null;

    return _.keys(filterParams).map((key) => (
      <StyledFilterChip key={key} label={`${key}: ${filterParams[key]}`} onDelete={handleResetFilter} color="primary" />
    ));
  }, [filterParams, handleResetFilter]);

  return (
    <Grid container columns={{xs: 1, sm: 1, md: 1, xl: 12}} spacing={2} flexWrap="nowrap">
      <Grid item xl="auto" display={{xs: 'none', xl: 'block'}} sx={{marginRight: 3}}>
        <FilterPanel initialValues={initialFilters} onChange={setFilterParams} />
      </Grid>

      <Grid item container xs={12} xl={9} sx={{position: 'relative'}}>
        {productsLoading && <Spinner />}
        <Grid item xs={12}>
          <StyledMetaContainer>
            {!productsLoading && (
              <Typography variant="body1" color="primary.dark">
                {metaTitle}
              </Typography>
            )}
            {renderFilterChips}
          </StyledMetaContainer>
        </Grid>

        <Grid container item xs={12} rowSpacing={2} columnSpacing={2} columns={{xs: 1, sm: 1, md: 4, xl: 9}}>
          {!productsLoading &&
            productsReady &&
            (products || []).map((product) => (
              <Grid item key={product.name} xs={1} sm={1} md={2} xl={3}>
                <ProductCard product={product} ordered={CartStore.products.get(product.id)} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default CatalogPage;
