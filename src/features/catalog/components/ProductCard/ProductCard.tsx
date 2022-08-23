import React, {memo, useCallback} from 'react';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import {
  StyledAddCardButton,
  StyledContainer,
  StyledImage,
  StyledPriceContainer,
  StyledSaleMark,
  StyledTitle,
} from 'features/catalog/components/ProductCard/ProductCardStyles';
import {Typography} from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartStore from 'store/CartStore';
import OrderButton from 'features/catalog/components/OrderButton/OrderButton';

interface IProps {
  product: IBaseProduct;
  ordered?: number;
}

const ProductCard = ({product, ordered}: IProps) => {
  const handleAddToCart = useCallback(() => {
    CartStore.increase(product);
  }, [product]);

  const handleOrderButtonChanged = useCallback(
    (value: number) => {
      CartStore.increase(product);
      if (ordered && ordered < value) {
        CartStore.increase(product);
      }
      if (ordered && ordered >= value) {
        CartStore.decrease(product);
      }
    },
    [product, ordered]
  );

  const buttonTitle = ordered ? `${ordered} in cart` : 'Add to cart';

  return (
    <StyledContainer>
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
        <OrderButton value={ordered} onChange={handleOrderButtonChanged} />
      ) : (
        <StyledAddCardButton
          startIcon={ordered ? undefined : <CartIcon fontSize="small" sx={{marginRight: 1}} />}
          title={buttonTitle}
          variant="action"
          onClick={handleAddToCart}
        />
      )}
    </StyledContainer>
  );
};

export default memo(ProductCard);
