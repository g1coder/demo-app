import React, {memo, useCallback, useState} from 'react';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import {
  StyledAddCardButton,
  StyledContainer,
  StyledImage,
  StyledOrderButtonContainer,
  StyledPriceContainer,
  StyledSaleMark,
  StyledTitle,
} from 'features/catalog/components/ProductCard/ProductCardStyles';
import {Typography} from '@mui/material';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import CartStore from 'features/catalog/store/CartStore';
import OrderButton from 'features/catalog/components/OrderButton/OrderButton';

interface IProps {
  product: IBaseProduct;
  ordered?: number;
}

const ProductCard = ({product, ordered}: IProps) => {
  const [pending, setPending] = useState(false);

  const handleIncrease = useCallback(() => {
    setPending(true);
    CartStore.increase(product).finally(() => setPending(false));
  }, [product]);

  const handleDecrease = useCallback(() => {
    setPending(true);
    CartStore.decrease(product).finally(() => setPending(false));
  }, [product]);

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
