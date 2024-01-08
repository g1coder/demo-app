import {Box, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import CartIcon from '@mui/icons-material/ShoppingCartOutlined';
import AddIcon from '@mui/icons-material/Add';
import {PrimaryButton, Spinner} from '@shared/ui-kit';
import {useProductChangeCount} from '../api';
import {IBaseProduct} from '@entities/product';

interface IProps {
  productId: IBaseProduct['id'];
  value: number | undefined;
  loading: boolean;
}

export const ProductChangeCount = ({value, productId, loading}: IProps) => {
  const changeCount = useProductChangeCount(productId);

  if (!value) {
    return (
      <StyledAddCardButton
        startIcon={<CartIcon fontSize="small" sx={{marginRight: 1}} />}
        title="Add to cart"
        buttonType="action"
        onClick={() => changeCount.mutate('increment')}
      />
    );
  }

  return (
    <StyledOrderButtonContainer>
      <StyledContainer>
        <StyledIconContainer type="decrement" onClick={() => changeCount.mutate('decrement')}>
          <RemoveOutlinedIcon />
        </StyledIconContainer>
        <Typography variant="h4" color="primary.light" sx={{userSelect: 'none'}}>
          {loading ? <Spinner /> : value}
        </Typography>
        <StyledIconContainer type="increment" onClick={() => changeCount.mutate('increment')}>
          <AddIcon />
        </StyledIconContainer>
      </StyledContainer>
    </StyledOrderButtonContainer>
  );
};

const borderRadius = 32;

const StyledContainer = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 180,
  height: spacing(6),
  borderRadius: spacing(4),
  color: '#fff',
  transition: 'all .3s ease',
  boxShadow: '0 10px 30px rgb(17 44 145 / 30%)',
  cursor: 'default',
}));

const StyledIconContainer = styled('div')<{type: 'increment' | 'decrement'}>(({theme: {palette}, type}) => ({
  backgroundColor: palette.primary.light,
  height: '100%',
  borderTopLeftRadius: type === 'decrement' ? borderRadius : 0,
  borderBottomLeftRadius: type === 'decrement' ? borderRadius : 0,

  borderTopRightRadius: type === 'increment' ? borderRadius : 0,
  borderBottomRightRadius: type === 'increment' ? borderRadius : 0,

  flexBasis: 50,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  transition: 'all .5s ease',
  '&:hover': {
    backgroundColor: palette.secondary.main,
  },
}));

const StyledOrderButtonContainer = styled('div')(({theme: {spacing}}) => ({
  marginTop: spacing(3),
  display: 'flex',
  justifyContent: 'center',
}));

const StyledAddCardButton = styled(PrimaryButton)(({theme: {spacing}}) => ({
  marginTop: spacing(3),
}));
