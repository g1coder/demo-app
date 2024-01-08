import {useMemo, useState} from 'react';
import {Grid} from '@mui/material';
import {ProductChangeCount, ProductChangeFavorite} from '@features/product';
import {
  IProductListParams,
  ProductCard,
  ProductFilters,
  ProductPrice,
  useProductList,
  useProductFavorites,
} from '@entities/product';
import {Spinner} from '@shared/ui-kit';
import {StyledCardContainer, StyledContainer, StyledFiltersContainer, StyledSaleMark, StyledTitle} from './styles';

export const ProductList = () => {
  const [filterParams, setFilterParams] = useState<IProductListParams>();

  const productList = useProductList(filterParams);
  const productFavorites = useProductFavorites();

  const metaTitle = useMemo(() => {
    if (productList.isLoading) {
      return '';
    }

    if (productList.isFetched && !productList.data?.total) {
      return 'No items';
    }

    return productList.data?.items.length === productList.data?.meta.total
      ? `Showing ${productList.data?.items.length}`
      : `Showing ${productList.data?.items.length} from ${productList.data?.meta.total}`;
  }, [productList]);

  return (
    <StyledContainer>
      <StyledFiltersContainer>
        <ProductFilters onChange={setFilterParams} />
      </StyledFiltersContainer>

      <StyledCardContainer>
        <StyledTitle variant="body1" color="primary.dark" hidden={productList.isLoading}>
          {metaTitle}
        </StyledTitle>

        {productList.isLoading && <Spinner />}

        {(productList.data?.items || []).map((product) => (
          <Grid item key={product.name}>
            <ProductCard
              product={product}
              favoriteEl={
                <ProductChangeFavorite
                  productId={product.id}
                  isFavorite={productFavorites.data?.items.includes(product.id)}
                />
              }
              priceShowingEl={<ProductPrice price={product.price} discount={product.discount} />}
              priceChangingEl={<ProductChangeCount productId={product.id} value={1} loading={productList.isLoading} />}
              saleMarkEl={product.discount ? <StyledSaleMark /> : undefined}
            />
          </Grid>
        ))}
      </StyledCardContainer>
    </StyledContainer>
  );
};
