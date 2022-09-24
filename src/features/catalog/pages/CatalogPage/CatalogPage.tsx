import React, {useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid, Typography} from '@mui/material';
import ProductCard from 'features/catalog/components/ProductCard/ProductCard';
import FilterPanel from 'features/catalog/components/FilterPanel/FilterPanel';
import useFetch from 'core/hooks/useFetch';
import CatalogService from 'features/catalog/services/CatalogService';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import Spinner from 'core/components/Spinner';
import CartStore from 'features/catalog/store/CartStore';
import IProductParams from 'features/catalog/models/IProductParams';
import IList from 'core/models/IList';

const CatalogPage = observer(() => {
  const [filterParams, setFilterParams] = useState<IProductParams>();

  const [{data: products, ready: productsReady, loading: productsLoading}] = useFetch<IList<IBaseProduct> | null>(
    {
      fetch: () => CatalogService.getList(filterParams),
      data: null,
    },
    [filterParams]
  );

  const metaTitle = useMemo(() => {
    if (productsLoading || !products) {
      return '';
    }
    if (products && !products.$meta.total_count) {
      return 'No items';
    }

    return products.length === products.$meta.total_count
      ? `Showing ${products.length}`
      : `Showing ${products.length} from ${products.$meta.total_count}`;
  }, [products, productsLoading]);

  return (
    <Grid container columns={{xs: 1, lg: 12, xl: 12}} spacing={2}>
      {productsLoading && <Spinner fixed />}

      <Grid item xs={12} xl={3}>
        <FilterPanel onChange={setFilterParams} />
      </Grid>

      <Grid item container xs={12} xl={9} sx={{position: 'relative'}}>
        {!productsLoading && (
          <Grid item xs={12} xl={3} sx={{paddingBottom: 2}}>
            <Typography variant="body1" color="primary.dark">
              {metaTitle}
            </Typography>
          </Grid>
        )}

        <Grid
          container
          item
          xs={12}
          rowSpacing={2}
          columnSpacing={2}
          columns={{xs: 1, md: 4, lg: 8, xl: 9}}
          justifyContent="center"
        >
          {!productsLoading &&
            productsReady &&
            (products || []).map((product) => (
              <Grid item key={product.name} xs={1} sm={1} md={2} lg={3} xl={3}>
                <ProductCard product={product} ordered={CartStore.products.get(product.id)} />
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
});

export default CatalogPage;
