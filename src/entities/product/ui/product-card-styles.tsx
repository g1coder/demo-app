import {Typography} from '@mui/material';
import Card from '@mui/material/Card';
import {styled} from '@mui/material/styles';
import {PrimaryButton} from '@shared/ui-kit';

export const StyledContainer = styled(Card)(({theme: {spacing}}) => ({
  position: 'relative',
  margin: 'auto',
  maxWidth: 340,
  width: '100%',
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

export const StyledFavoriteIcon = styled('div')({
  position: 'absolute',
});

export const StyledImage = styled('img')({
  width: '100%',
});

export const StyledTitle = styled(Typography)(({theme: {palette, spacing}}) => ({
  color: palette.primary.dark,
  transition: 'color 0.3s ease',
  marginTop: spacing(3),
  '&:hover': {
    color: palette.primary.light,
  },
}));

interface IPriceProps {
  price: number;
  discount: number | undefined;
}

export const StyledPriceContainer = styled(({price, discount, ...rest}: IPriceProps) => (
  <>
    {!discount ? (
      <Typography variant="h4" color="primary.light" sx={{marginTop: 3}}>
        {`$${price}`}
      </Typography>
    ) : (
      <div {...rest}>
        <del>
          <Typography variant="body1" color="text.secondary">
            {`$${price}`}
          </Typography>
        </del>
        <Typography variant="h4" color="secondary.main" sx={{marginLeft: 1}}>
          {`$${discount}`}
        </Typography>
      </div>
    )}
  </>
))<IPriceProps>(({theme: {spacing}, discount}) => ({
  marginTop: spacing(3),
  display: discount ? 'flex' : 'block',
  justifyContent: 'center',
}));

export const StyledAddCardButton = styled(PrimaryButton)(({theme: {spacing}}) => ({
  marginTop: spacing(3),
}));

export const StyledOrderButtonContainer = styled('div')(({theme: {spacing}}) => ({
  marginTop: spacing(3),
  display: 'flex',
  justifyContent: 'center',
}));
