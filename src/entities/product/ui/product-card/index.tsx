import {memo, ReactNode} from 'react';
import IBaseProduct from 'shared/model/IBaseProduct';
import {Typography} from '@mui/material';
import {StyledContainer, StyledImage, StyledSaleMark, StyledTitle} from './styles';

interface IProps {
  product: IBaseProduct;
  favoriteEl: ReactNode;
  priceShowingEl: ReactNode;
  priceChangingEl: ReactNode;
}

const ProductCard = ({product, favoriteEl, priceShowingEl, priceChangingEl}: IProps) => {
  return (
    <StyledContainer>
      {favoriteEl}
      {product.discount && <StyledSaleMark />}
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

export default memo(ProductCard);
