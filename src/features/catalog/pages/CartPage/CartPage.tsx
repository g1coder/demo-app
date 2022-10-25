import React, {useCallback, useMemo, useState} from 'react';
import {observer} from 'mobx-react-lite';
import CartStore from 'features/catalog/store/CartStore';
import {Divider, Grid, Paper, Typography} from '@mui/material';
import {StyledContainer, StyledProductItem, StyledProductTitle, StyledSummaryTitle} from './CartPageStyle';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';
import useData from 'core/hooks/useData';
import Spinner from 'core/components/Spinner';
import CartService from 'features/catalog/services/CartService';
import {useContextSelector} from 'use-context-selector';
import AppContext from 'core/components/AppContext';
import AppRoutes from 'core/constants/AppRoutes';
import Utils from 'core/services/Utils';
import {useLocation} from 'react-router-dom';

const CartPage = observer(() => {
  const loggedUser = useContextSelector(AppContext, (state) => state.user);
  const location = useLocation();
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const loginUrl = useMemo(() => `${AppRoutes.LOGIN.url}${Utils.getNextUrlString(location)}`, [location]);

  const [{data: productPairs, ready, loading}] = useData<Array<{product: IBaseProduct; count: number}>>(
    {
      fetch: () => CartService.getCartDetails(),
      data: [],
    },
    []
  );

  const handleSubmitCart = useCallback(() => {
    setSubmitting(true);
    CartStore.submitCart()
      .then(() => {
        setSuccessSubmitted(true);
      })
      .finally(() => {
        setSubmitting(false);
      });
  }, []);

  if (!ready || submitting) {
    return <Spinner />;
  }

  if (ready && productPairs.length === 0 && !loading) {
    return (
      <Typography variant="body1" color="primary.dark">
        No products in cart
      </Typography>
    );
  }

  if (successSubmitted) {
    return (
      <Typography variant="h3" color="secondary.main" textAlign="center">
        You cart has been successfully checked out!
      </Typography>
    );
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
          {loading && <Spinner />}
          {!loading &&
            productPairs.map(({product, count}) => (
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
          <Grid item textAlign="center">
            {loggedUser ? (
              <PrimaryButton title="Checkout" onClick={handleSubmitCart} disabled={submitting} />
            ) : (
              <>
                <Typography variant="body1" color="primary.dark">
                  Log in to submit your cart
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.dark"
                  sx={{cursor: 'pointer', textDecoration: 'underline'}}
                  component="a"
                  href={loginUrl}
                >
                  Sign in
                </Typography>
              </>
            )}
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
