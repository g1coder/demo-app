import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import CartStore from 'store/CartStore';
import {Grid} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';
import {
  StyledContainer,
  StyledProductItem,
  StyledProductTitle,
  StyledProductTitleContainer,
  StyledSummaryTitle,
} from './CartPageStyle';
import IBaseProduct from '../../models/IBaseProduct';

const CartPage = observer(() => {

  const productPairs: Array<{product: IBaseProduct; count: number}> = useMemo(() => {
    let result: Array<{product: IBaseProduct; count: number}> = []
    CartStore.products.forEach((count, key) => {
      const product = CartStore.availableProducts.find(ap => ap.id === key);
      if (!!product) {
        result.push({product, count})
      }
    })
    return result;
  }, []);


  return (
    <StyledContainer>
      <Grid container columns={{xs: 1, sm: 1, md: 1, xl: 12}} spacing={2} flexWrap="nowrap">
        <Grid item xl={8}>
          <StyledProductTitleContainer item container justifyContent="space-between" spacing={2}>
            <StyledProductTitle title="Product" xs={6} />
            <StyledProductTitle title="Price" xs={2} textAlign="right" />
            <StyledProductTitle title="Count" xs={2} textAlign="right" />
            <StyledProductTitle title="Total" xs={2} textAlign="right" />
          </StyledProductTitleContainer>

          {productPairs.map(({product, count}) => (
            <StyledProductItem
              key={product.id}
              product={product}
              count={count}
            />
          ))}
        </Grid>
        <Grid item xl={4} sx={{padding: 2, backgroundColor: 'grey'}}>
          <Grid item>
            <StyledSummaryTitle variant="h6">${CartStore.totalPrice}</StyledSummaryTitle>
          </Grid>
          <Grid item>
            <CircleButton title="Checkout" variant="primary" size="regular" />
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
});

export default CartPage;
