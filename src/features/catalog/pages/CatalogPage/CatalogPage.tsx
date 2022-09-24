import React, {useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';
import ProductCard from 'features/catalog/components/ProductCard/ProductCard';
import FilterPanel from 'features/catalog/components/FilterPanel/FilterPanel';
import useFetch from 'core/hooks/useFetch';
import CatalogService from 'features/catalog/services/CatalogService';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import Spinner from 'core/components/Spinner';
import CartStore from 'features/catalog/store/CartStore';
import IProductParams from 'features/catalog/models/IProductParams';
import IList from 'core/models/IList';
import {
  StyledCardsContainer,
  StyledFiltersContainer,
  StyledMetaTitle,
  StyledRoot,
} from 'features/catalog/pages/CatalogPage/CatalogPageStyles';

const CatalogPage = observer(() => {
  const [filterParams, setFilterParams] = useState<IProductParams>();

  const [{data: products, loading: productsLoading}] = useFetch<IList<IBaseProduct> | null>(
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
    <StyledRoot>
      <StyledFiltersContainer>
        <FilterPanel onChange={setFilterParams} />
      </StyledFiltersContainer>
      <StyledCardsContainer>
        <StyledMetaTitle variant="body1" color="primary.dark" hidden={productsLoading}>
          {metaTitle}
        </StyledMetaTitle>
        {productsLoading && <Spinner />}
        {(products || []).map((product) => (
          <Grid item key={product.name}>
            <ProductCard product={product} ordered={CartStore.products.get(product.id)} />
          </Grid>
        ))}
      </StyledCardsContainer>
    </StyledRoot>
  );
});

export default CatalogPage;
