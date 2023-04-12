import {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';
import ProductCard from 'features/catalog/components/ProductCard/ProductCard';
import FilterPanel from 'features/catalog/components/FilterPanel/FilterPanel';
import useData from 'shared/hooks/useData';
import CatalogService from 'features/catalog/services/CatalogService';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import Spinner from 'shared/Spinner';
import CartStore from 'features/catalog/store/CartStore';
import IProductParams from 'features/catalog/models/IProductParams';
import List from 'shared/core/models/List';
import {
  StyledCardsContainer,
  StyledFiltersContainer,
  StyledMetaTitle,
  StyledRoot,
} from 'features/catalog/pages/CatalogPage/CatalogPageStyles';
import CatalogStore from 'features/catalog/store/CatalogStore';

const CatalogPage = observer(() => {
  const [filterParams, setFilterParams] = useState<IProductParams>();

  const [{data: products, loading: productsLoading}] = useData<List<IBaseProduct> | null>(
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
    if (products && !products.meta.total) {
      return 'No items';
    }

    return products.items.length === products.meta.total
      ? `Showing ${products.items.length}`
      : `Showing ${products.items.length} from ${products.meta.total}`;
  }, [products, productsLoading]);

  const handleClickFavorite = useCallback((id: string) => {
    return CatalogStore.toggleFavorites(id);
  }, []);

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
        {(products?.items || []).map((product) => (
          <Grid item key={product.name}>
            <ProductCard
              product={product}
              ordered={CartStore.products.get(product.id)}
              toggleFavorites={handleClickFavorite}
              isFavorite={CatalogStore.favoriteIds.includes(product.id)}
            />
          </Grid>
        ))}
      </StyledCardsContainer>
    </StyledRoot>
  );
});

export default CatalogPage;
