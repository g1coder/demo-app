import {useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Grid} from '@mui/material';

import useData from 'shared/lib/hooks/useData';
import IBaseProduct from 'shared/model/IBaseProduct';
import Spinner from 'shared/ui/Spinner';
import List from 'shared/core/models/List';
import CatalogStore from '../../store/CatalogStore';
import CartStore from '../../store/CartStore';
import {getList} from '../../api/CatalogService';
import IProductParams from '../../model/IProductParams';
import ProductCardInfo from '../product-card-info';
import {StyledContainer, StyledCardContainer, StyledFiltersContainer, StyledTitle} from './styles';
import ProductFilters from '../product-filters';

const ProductList = observer(() => {
  const [filterParams, setFilterParams] = useState<IProductParams>();

  const [{data: products, loading}] = useData<List<IBaseProduct> | null>(
    {
      fetch: () => getList(filterParams),
      data: null,
    },
    [filterParams]
  );

  const metaTitle = useMemo(() => {
    if (loading || !products) {
      return '';
    }
    if (products && !products.meta.total) {
      return 'No items';
    }

    return products.items.length === products.meta.total
      ? `Showing ${products.items.length}`
      : `Showing ${products.items.length} from ${products.meta.total}`;
  }, [products, loading]);

  return (
    <StyledContainer>
      <StyledFiltersContainer>
        <ProductFilters onChange={setFilterParams} />
      </StyledFiltersContainer>

      <StyledCardContainer>
        <StyledTitle variant="body1" color="primary.dark" hidden={loading}>
          {metaTitle}
        </StyledTitle>

        {loading && <Spinner />}

        {(products?.items || []).map((product) => (
          <Grid item key={product.name}>
            <ProductCardInfo
              product={product}
              orderedCount={CartStore.products.get(product.id)}
              isFavorite={CatalogStore.favoriteIds.includes(product.id)}
              toggleFavorites={CatalogStore.toggleFavorites}
              increase={CartStore.increase}
              decrease={CartStore.decrease}
            />
          </Grid>
        ))}
      </StyledCardContainer>
    </StyledContainer>
  );
});

export default ProductList;
