import React, {memo} from 'react';
import IBaseProduct from 'features/shop/models/IBaseProduct';
import {StyledContainer} from 'features/shop/components/ProductCard/ProductCardStyles';

interface IProps {
  item: IBaseProduct;
}

const ProductCard = ({item}: IProps) => {
  return <StyledContainer>{item.name}</StyledContainer>;
};

export default memo(ProductCard);
