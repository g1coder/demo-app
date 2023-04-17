import {Divider, Grid, Paper, Typography} from '@mui/material';
import {memo, ReactNode} from 'react';
import {CartStore} from '@entities/cart';
import {observer} from 'mobx-react-lite';
import {StyledHeader, StyledSubheader} from './styles';

interface IProps {
  submitButton: ReactNode;
}

const CartSummary = observer(({submitButton}: IProps) => {
  const totalPrice = CartStore.totalPrice;
  const shipping = CartStore.totalPrice * 0.2;
  const taxes = CartStore.totalPrice * 0.13;
  const estimatedTotal = (totalPrice + shipping + taxes).toFixed(2);

  return (
    <Grid item xs={12} xl={3} justifyContent="center" component={Paper} sx={{padding: 2}}>
      <Grid item>
        <StyledHeader title="Summary" textAlign="center" />
      </Grid>
      <Grid item>
        <Divider />
      </Grid>
      <Grid item container justifyContent="space-between" padding="16px 0">
        <Grid item>
          <StyledSubheader variant="h6">Subtotal</StyledSubheader>
        </Grid>
        <Grid item>
          <StyledSubheader variant="h6">${totalPrice.toFixed(2)}</StyledSubheader>
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
          <StyledSubheader variant="h6">Estimated total</StyledSubheader>
        </Grid>
        <Grid item>
          <StyledSubheader variant="h6">${estimatedTotal}</StyledSubheader>
        </Grid>
      </Grid>

      <Grid item paddingBottom={4}>
        <Divider />
      </Grid>
      <Grid item textAlign="center">
        {submitButton}
      </Grid>
      <Grid item textAlign="center" paddingTop={2}>
        <Typography variant="body1" color="primary.light">
          {`Need help? Call us at 1-477-792-6289`}
        </Typography>
      </Grid>
    </Grid>
  );
});

export default memo(CartSummary);
