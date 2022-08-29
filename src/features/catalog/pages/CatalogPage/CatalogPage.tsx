import _ from 'lodash';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
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
import {useSearchParams} from 'react-router-dom';

const initialFilters = {
  tags: ['lemon', 'mineral', 'pack', 'soda'],
  min: 0,
  max: 50,
};

const CatalogPage = observer(() => {
  const [searchParams] = useSearchParams();
  const [filterParams, setFilterParams] = useState<IProductParams>();

  useEffect(() => {
    const tag = searchParams.get('tag');
    const min = searchParams.get('min');
    const max = searchParams.get('max');

    const params: IProductParams = _.pickBy(
      {
        tag: tag || undefined,
        min: min ? +min : undefined,
        max: max ? +max : undefined,
      },
      (o) => !_.isNil(o)
    );

    setFilterParams(params);
  }, [searchParams]);

  const [{data: products, ready: productsReady, loading: productsLoading}] = useFetch<IList<IBaseProduct> | null>(
    {
      fetch: () =>
        CatalogService.getList(filterParams).then((response) => {
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
      const params = {...currentValue};
      delete params[property];
      return params;
    });
  }, []);

  const renderFilterChips = useMemo(() => {
    if (!filterParams) return null;

    return _.keys(filterParams).map((key) => (
      <StyledFilterChip
        key={key}
        label={`${key}: ${filterParams[key]}`}
        onDelete={() => handleResetFilter(key as keyof IProductParams)}
        color="primary"
      />
    ));
  }, [filterParams, handleResetFilter]);

  return (
    <Grid container columns={{xs: 1, sm: 1, md: 1, lg: 12, xl: 12}} spacing={2}>
      <Grid item xs={12} xl={3} rowSpacing={1} columnSpacing={1}>
        <FilterPanel initialValues={initialFilters} />
      </Grid>

      <Grid item container xs={12} xl={9} sx={{position: 'relative'}} alignContent="flex-start">
        {productsLoading && <Spinner />}

        <Grid item xs={12} container alignItems="center">
          <Grid item xs={products?.length ? 3 : 12} textAlign="center">
            <StyledMetaContainer>
              {!productsLoading && (
                <Typography variant="body1" color="primary.dark">
                  {metaTitle}
                </Typography>
              )}
            </StyledMetaContainer>
          </Grid>

          <Grid item xs="auto">
            {renderFilterChips}
          </Grid>
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
