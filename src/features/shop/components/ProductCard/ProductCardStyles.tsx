import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import {Typography} from '@mui/material';
import CircleButton from 'core/components/Buttons/CircleButton';

export const StyledContainer = styled(Card)(({theme: {spacing}}) => ({
  margin: 'auto',
  maxWidth: 360,
  height: 600,
  borderRadius: 20,
  transition: 'all 0.3s ease',
  padding: spacing(2, 3),
  textAlign: 'center',
  cursor: 'pointer',

  '&:hover': {
    boxShadow: '0 0px 10px rgb(17 44 145 / 40%)',
    transform: 'scaleY(0.99)',
  },
}));

export const StyledImage = styled('img')(() => ({
  width: '100%',
}));

export const StyledTitle = styled(Typography)(({theme: {palette, spacing}}) => ({
  color: palette.primary.dark,
  transition: 'color 0.3s ease',
  marginTop: spacing(3),
  '&:hover': {
    color: palette.primary.light,
  },
}));

export const StyledAddCardButton = styled(CircleButton)(({theme: {spacing}}) => ({
  marginTop: spacing(3),
}));
