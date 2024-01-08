import {useContext} from 'react';
import {Grid, Typography} from '@mui/material';
import {AuthContext, IAuthContext} from '@features/authorization';
import {CartList, CartSummary, useCartDetails} from '@entities/cart';
import {CartSubmit} from '@features/cart';
import {Spinner} from '@shared/ui-kit';
import {StyledContainer} from './styles';

export const Cart = () => {
  const {user} = useContext<IAuthContext>(AuthContext);
  const cartDetails = useCartDetails();

  if (cartDetails.isLoading) {
    return <Spinner />;
  }

  if (cartDetails.isFetched && cartDetails.data?.totalCount === 0) {
    return (
      <Typography variant="body1" color="primary.dark">
        No products in cart
      </Typography>
    );
  }

  return (
    <StyledContainer>
      <Grid container columns={{xs: 1, sm: 1, md: 11, xl: 12}} spacing={2} justifyContent="space-between">
        <CartList items={cartDetails.data?.items || []} loading={cartDetails.isLoading} />
        <CartSummary submitButton={<CartSubmit isLogged={!!user} />} />
      </Grid>
    </StyledContainer>
  );
};
