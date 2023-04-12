import {memo, useCallback, useState} from 'react';
import IBaseProduct from 'shared/model/IBaseProduct';
import {
  StyledAddCardButton,
  StyledContainer,
  StyledFavoriteIcon,
  StyledImage,
  StyledOrderButtonContainer,
  StyledPriceContainer,
  StyledSaleMark,
  StyledTitle,
} from 'pages/catalog/components/ProductCard/ProductCardStyles';
import {Typography} from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartStore from 'widgets/cart/api/store';
import OrderButton from 'pages/catalog/components/OrderButton/OrderButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

interface IProps {
  product: IBaseProduct;
  ordered?: number;
  toggleFavorites: (id: string) => Promise<void>;
  isFavorite?: boolean;
}

const ProductCard = ({product, ordered, isFavorite, toggleFavorites}: IProps) => {
  const [pending, setPending] = useState(false);
  const [favoritePending, setFavoritePending] = useState(false);

  const handleIncrease = useCallback(() => {
    setPending(true);
    CartStore.increase(product).finally(() => setPending(false));
  }, [product]);

  const handleDecrease = useCallback(() => {
    setPending(true);
    CartStore.decrease(product).finally(() => setPending(false));
  }, [product]);

  const handleClickOnFavorite = useCallback(() => {
    if (favoritePending) return;
    setFavoritePending(true);
    toggleFavorites(product.id).finally(() => setFavoritePending(false));
  }, [favoritePending, product.id, toggleFavorites]);

  const buttonTitle = ordered ? `${ordered} in cart` : 'Add to cart';

  return (
    <StyledContainer>
      <StyledFavoriteIcon onClick={handleClickOnFavorite}>
        {isFavorite ? (
          <FavoriteIcon color="primary" fontSize="large" />
        ) : (
          <FavoriteBorderIcon color="primary" fontSize="large" />
        )}
      </StyledFavoriteIcon>
      {product.discount && <StyledSaleMark />}
      <StyledImage src={product.image} />
      <StyledTitle variant="h5" noWrap>
        {product.name}
      </StyledTitle>
      <Typography variant="body2" color="primary.dark" sx={{marginTop: 2}} noWrap>
        {product.description}
      </Typography>
      <StyledPriceContainer price={product.price} discount={product.discount} />
      {ordered ? (
        <StyledOrderButtonContainer>
          <OrderButton value={ordered} add={handleIncrease} remove={handleDecrease} loading={pending} />
        </StyledOrderButtonContainer>
      ) : (
        <StyledAddCardButton
          startIcon={ordered ? undefined : <CartIcon fontSize="small" sx={{marginRight: 1}} />}
          title={buttonTitle}
          buttonType="action"
          onClick={handleIncrease}
        />
      )}
    </StyledContainer>
  );
};

export default memo(ProductCard);
