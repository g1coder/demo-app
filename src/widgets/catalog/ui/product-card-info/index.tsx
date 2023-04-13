import {memo, useCallback, useState} from 'react';
import IBaseProduct from 'shared/model/IBaseProduct';
import {ProductCard, ProductPrice} from 'entities';
import {ProductChangeFavorite, ProductChangeCount} from 'features';
import {StyledContainer} from './styles';

interface IProps {
  product: IBaseProduct;
  increase: (product: IBaseProduct) => Promise<void>;
  decrease: (product: IBaseProduct) => Promise<void>;
  toggleFavorites: (id: string) => Promise<void>;
  orderedCount?: number;
  isFavorite?: boolean;
}

const ProductCardInfo = ({product, orderedCount, isFavorite, toggleFavorites, increase, decrease}: IProps) => {
  const [pending, setPending] = useState(false);
  const [favoritePending, setFavoritePending] = useState(false);

  const handleIncrease = useCallback(() => {
    setPending(true);
    return increase(product).finally(() => setPending(false));
  }, [product]);

  const handleDecrease = useCallback(() => {
    setPending(true);
    return decrease(product).finally(() => setPending(false));
  }, [product]);

  const handleClickOnFavorite = useCallback(() => {
    if (favoritePending) Promise.resolve();
    setFavoritePending(true);
    return toggleFavorites(product.id).finally(() => setFavoritePending(false));
  }, [favoritePending, product.id, toggleFavorites]);

  return (
    <StyledContainer>
      <ProductCard
        product={product}
        favoriteEl={<ProductChangeFavorite isFavorite={!!isFavorite} toggleFavorite={handleClickOnFavorite} />}
        priceShowingEl={<ProductPrice price={product.price} discount={product.discount} />}
        priceChangingEl={
          <ProductChangeCount
            orderedCount={orderedCount}
            increase={handleIncrease}
            decrease={handleDecrease}
            loading={pending}
          />
        }
      />
    </StyledContainer>
  );
};

export default memo(ProductCardInfo);
