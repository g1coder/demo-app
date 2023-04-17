import {Grid, Typography} from '@mui/material';
import {observer} from 'mobx-react-lite';
import {useCallback, useContext, useState} from 'react';
import {CartSubmit} from '@features/cart';
import {CartSummary, CartList, CartStore, CartService} from '@entities/cart';
import {IBaseProduct} from '@entities/catalog';
import {AuthContext, IAuthContext} from '@widgets/auth';
import useData from '@shared/lib/hooks/useData';
import Spinner from '@shared/ui-kit/Spinner';
import {StyledContainer} from './styles';

const Cart = observer(() => {
  const [successSubmitted, setSuccessSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const {user} = useContext<IAuthContext>(AuthContext);

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
      <>
        <Typography variant="h5" color="secondary.main" textAlign="center">
          You cart has been successfully checked out!
        </Typography>
      </>
    );
  }

  return (
    <StyledContainer>
      <Grid container columns={{xs: 1, sm: 1, md: 11, xl: 12}} spacing={2} justifyContent="space-between">
        <CartList items={productPairs} loading={loading} />
        <CartSummary
          submitButton={<CartSubmit submitCart={handleSubmitCart} submitting={submitting} isLoggined={!!user} />}
        />
      </Grid>
    </StyledContainer>
  );
});

export default Cart;
