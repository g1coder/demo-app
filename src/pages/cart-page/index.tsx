import {styled} from '@mui/material/styles';
import {Cart} from '@widgets/cart';

export const StyledContainer = styled('section')(({theme: {spacing}}) => ({
  padding: spacing(4, 0),
}));

const CartPage = () => (
  <StyledContainer>
    <Cart />
  </StyledContainer>
);

export default CartPage;
