import {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';
import ProductCard from 'pages/catalog/components/ProductCard/ProductCard';
import FilterPanel from 'pages/catalog/components/FilterPanel/FilterPanel';
import useData from 'shared/lib/hooks/useData';
import CatalogService from 'pages/catalog/services/CatalogService';
import IBaseProduct from 'shared/model/IBaseProduct';
import Spinner from 'shared/ui/Spinner';
import CartStore from 'widgets/cart/api/store';
import IProductParams from 'pages/catalog/models/IProductParams';
import List from 'shared/core/models/List';
import {
  StyledCardsContainer,
  StyledFiltersContainer,
  StyledMetaTitle,
  StyledRoot,
} from 'pages/catalog/pages/CatalogPage/CatalogPageStyles';
import CatalogStore from 'pages/catalog/store/CatalogStore';

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
