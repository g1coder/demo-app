import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import {styled} from '@mui/material/styles';
import PrimaryButton from '@shared/ui/Button/PrimaryButton';
import OrderButton from './order-button';

const StyledAddCardButton = styled(PrimaryButton)(({theme: {spacing}}) => ({
  marginTop: spacing(3),
}));

const StyledOrderButtonContainer = styled('div')(({theme: {spacing}}) => ({
  marginTop: spacing(3),
  display: 'flex',
  justifyContent: 'center',
}));

interface IProps {
  orderedCount: number | undefined;
  increase: () => Promise<void>;
  decrease: () => Promise<void>;
  loading: boolean;
}

const ProductChangeCount = ({orderedCount, increase, decrease, loading}: IProps) => {
  if (orderedCount) {
    return (
      <StyledOrderButtonContainer>
        <OrderButton value={orderedCount} add={increase} remove={decrease} loading={loading} />
      </StyledOrderButtonContainer>
    );
  }

  return (
    <StyledAddCardButton
      startIcon={<CartIcon fontSize="small" sx={{marginRight: 1}} />}
      title="Add to cart"
      buttonType="action"
      onClick={increase}
    />
  );
};

export default ProductChangeCount;
