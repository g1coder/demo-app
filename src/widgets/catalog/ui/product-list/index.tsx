import {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';
import FilterPanel from 'pages/catalog/components/FilterPanel/FilterPanel';
import useData from 'shared/lib/hooks/useData';
import CatalogService from 'pages/catalog/services/CatalogService';
import IBaseProduct from 'shared/model/IBaseProduct';
import Spinner from 'shared/ui/Spinner';
import CartStore from 'widgets/cart/api/store';
import IProductParams from 'widgets/catalog/model/IProductParams';
import List from 'shared/core/models/List';
import {
  StyledCardsContainer,
  StyledFiltersContainer,
  StyledMetaTitle,
  StyledRoot,
} from 'pages/catalog/pages/CatalogPage/styles';
import CatalogStore from '../.././store';
import ProductCardInfo from '../product-card-info';

const ProductList = observer(() => {
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
            <ProductCardInfo
              product={product}
              orderedCount={CartStore.products.get(product.id)}
              toggleFavorites={handleClickFavorite}
              isFavorite={CatalogStore.favoriteIds.includes(product.id)}
              increase={() => Promise.resolve()}
              decrease={() => Promise.resolve()}
            />
          </Grid>
        ))}
      </StyledCardsContainer>
    </StyledRoot>
  );
});

export default ProductList;
