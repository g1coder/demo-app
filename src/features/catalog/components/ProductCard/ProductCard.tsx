import React, {memo} from 'react';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import {StyledContainer} from 'features/catalog/components/ProductCard/ProductCardStyles';

interface IProps {
  item: IBaseProduct;
}

const ProductCard = ({item}: IProps) => {
  return <StyledContainer>{item.name}</StyledContainer>;
};

export default memo(ProductCard);
