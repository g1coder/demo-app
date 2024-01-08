import {Typography} from '@mui/material';
import {memo, ReactNode} from 'react';
import {IBaseProduct} from '../types';
import {StyledContainer, StyledImage, StyledTitle} from './product-card-styles';

interface IProps {
  product: IBaseProduct;
  favoriteEl: ReactNode;
  priceShowingEl: ReactNode;
  priceChangingEl: ReactNode;
  saleMarkEl?: ReactNode;
}

export const ProductCard = ({product, favoriteEl, priceShowingEl, priceChangingEl, saleMarkEl}: IProps) => {
  return (
    <StyledContainer>
      {favoriteEl}
      {saleMarkEl}
      <StyledImage src={product.image} />
      <StyledTitle variant="h5" noWrap>
        {product.name}
      </StyledTitle>
      <Typography variant="body2" color="primary.dark" sx={{marginTop: 2}} noWrap>
        {product.description}
      </Typography>
      {priceShowingEl}
      {priceChangingEl}
    </StyledContainer>
  );
};
