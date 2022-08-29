import React, {useMemo} from 'react';
import {observer} from 'mobx-react-lite';
import CartStore from 'store/CartStore';
import {Divider, Grid, Paper, Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';
import {StyledContainer, StyledProductItem, StyledProductTitle, StyledSummaryTitle} from './CartPageStyle';
import IBaseProduct from 'features/catalog/models/IBaseProduct';

const CartPage = observer(() => {
  const productPairs: Array<{product: IBaseProduct; count: number}> = useMemo(() => {
    let result: Array<{product: IBaseProduct; count: number}> = [];
    CartStore.products.forEach((count, key) => {
      const product = CartStore.availableProducts.find((ap) => ap.id === key);
      if (!!product) {
        result.push({product, count});
      }
    });
    return result;
  }, []);

  if (CartStore.products.size === 0) {
    return <StyledSummaryTitle variant="h6">Your cart is empty</StyledSummaryTitle>;
  }

  const totalPrice = CartStore.totalPrice;
  const shipping = CartStore.totalPrice * 0.2;
  const taxes = CartStore.totalPrice * 0.13;
  const estimatedTotal = (totalPrice + shipping + taxes).toFixed(2);

  return (
    <StyledContainer>
      <Grid container columns={{xs: 1, sm: 1, md: 11, xl: 12}} spacing={2} justifyContent="space-between">
        <Grid item xs={12} xl={8} sx={{padding: 2}}>
          <Grid
            item
            container
            justifyContent="space-between"
            spacing={2}
            display={{xs: 'none', md: 'flex'}}
            columns={{md: 12, xl: 12}}
          >
            <StyledProductTitle title="Product" xs={6} textAlign="left" />
            <StyledProductTitle title="Price" xs={2} />
            <StyledProductTitle title="Count" xs={2} />
            <StyledProductTitle title="Total" xs={2} />
          </Grid>
          <Divider />
          {productPairs.map(({product, count}) => (
            <StyledProductItem key={product.id} product={product} count={count} />
          ))}
        </Grid>

        <Grid item xs={12} xl={3} justifyContent="center" component={Paper} sx={{padding: 2}}>
          <Grid item>
            <StyledProductTitle title="Summary" textAlign="center" />
          </Grid>
          <Grid item>
            <Divider />
          </Grid>
          <Grid item container justifyContent="space-between" padding="16px 0">
            <Grid item>
              <StyledSummaryTitle variant="h6">Subtotal</StyledSummaryTitle>
            </Grid>
            <Grid item>
              <StyledSummaryTitle variant="h6">${totalPrice.toFixed(2)}</StyledSummaryTitle>
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1" color="primary.dark">
                Shipping
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="primary.dark">
                ${shipping.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>
          <Grid item container justifyContent="space-between">
            <Grid item>
              <Typography variant="body1" color="primary.dark">
                Salex Tax
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="primary.dark">
                ${taxes.toFixed(2)}
              </Typography>
            </Grid>
          </Grid>

          <Grid item paddingTop={2}>
            <Divider />
          </Grid>
          <Grid item container justifyContent="space-between" padding="16px 0">
            <Grid item>
              <StyledSummaryTitle variant="h6">Estimated total</StyledSummaryTitle>
            </Grid>
            <Grid item>
              <StyledSummaryTitle variant="h6">${estimatedTotal}</StyledSummaryTitle>
            </Grid>
          </Grid>

          <Grid item paddingBottom={4}>
            <Divider />
          </Grid>
          <Grid item>
            <CircleButton title="Checkout" variant="primary" size="regular" fullWidth />
          </Grid>
          <Grid item textAlign="center" paddingTop={2}>
            <Typography variant="body1" color="primary.light">
              {`Need help? Call us at 1-477-792-6289`}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </StyledContainer>
  );
});

export default CartPage;
