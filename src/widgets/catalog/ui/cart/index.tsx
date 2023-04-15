import {Grid, Typography} from '@mui/material';
import {observer} from 'mobx-react-lite';
import {useCallback, useContext, useState} from 'react';
import {CartSubmit} from '@features/catalog';
import {CartSummary, CartList} from '@entities/catalog';
import IBaseProduct from '@entities/catalog/model/IBaseProduct';
import useData from '@shared/lib/hooks/useData';
import Spinner from '@shared/ui/Spinner';
import { AuthContext, IAuthContext } from "@widgets/auth/lib/AuthContext";
import {getCartDetails} from '../../api/CartService';
import { CartStore } from '../../store';

import {StyledContainer} from './styles';

const Cart = observer(() => {
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {user} = useContext<IAuthContext>(AuthContext);

  const [{data: productPairs, ready, loading}] = useData<Array<{product: IBaseProduct; count: number}>>(
    {
      fetch: () => getCartDetails(),
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
      <Typography variant="h5" color="secondary.main" textAlign="center">
        You cart has been successfully checked out!
      </Typography>
    );
  }

  const totalPrice = CartStore.totalPrice;
  const shipping = CartStore.totalPrice * 0.2;
  const taxes = CartStore.totalPrice * 0.13;

  return (
    <StyledContainer>
      <Grid container columns={{xs: 1, sm: 1, md: 11, xl: 12}} spacing={2} justifyContent="space-between">
        <CartList items={productPairs} loading={loading} />
        <CartSummary
          totalPrice={totalPrice}
          shipping={shipping}
          taxes={taxes}
          submitButton={<CartSubmit submitCart={handleSubmitCart} submitting={submitting} isLoggined={!!user} />}
        />
      </Grid>
    </StyledContainer>
  );
});

export default Cart;
