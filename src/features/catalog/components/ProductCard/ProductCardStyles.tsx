import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';

export const StyledContainer = styled(Card)(({theme}) => ({
  margin: 'auto',
  maxWidth: 360,
  minHeight: 600,
  borderRadius: 20,
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 0px 10px rgb(17 44 145 / 40%)',
    transform: 'scaleY(0.99)',
  },
}));
