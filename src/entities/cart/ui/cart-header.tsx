import {useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Fab, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Routes} from '@shared/constants';

const DESKTOP_MODE = 'xl';

const StyledMobileContainer = styled('div')(({theme: {breakpoints}}) => ({
  cursor: 'pointer',
  [breakpoints.up(DESKTOP_MODE)]: {
    display: 'none',
  },
}));

const StyledFabCount = styled(({count, ...rest}: {count: number}) => (
  <div {...rest}>
    <Typography variant="body1" color="primary.dark" fontWeight="bold">
      {count}
    </Typography>
  </div>
))<{count: number}>(({theme}) => ({
  position: 'absolute',
  top: -20,
  right: -10,
  backgroundColor: theme.palette.secondary.main,
  height: 28,
  width: 24,
  clipPath: 'circle(30%)',
  padding: 8,
  boxSizing: 'content-box',
}));

const StyledDesktopContainer = styled(Fab)(({theme: {palette, breakpoints}}) => ({
  display: 'none',
  position: 'relative',
  backgroundColor: palette.primary.light,
  color: '#fff',
  cursor: 'pointer',
  transition: 'color 1s ease',
  '&:hover': {
    color: palette.text.primary,
    backgroundColor: palette.primary.light,
  },

  [breakpoints.up(DESKTOP_MODE)]: {
    display: 'block',
  },
}));

export const CartHeader = () => {
  const navigate = useNavigate();
  const count = 0;

  return (
    <>
      <StyledMobileContainer onClick={() => navigate(Routes.CART.url)}>
        <ShoppingCartIcon />
      </StyledMobileContainer>
      <StyledDesktopContainer aria-label="add" size="medium" onClick={() => navigate(Routes.CART.url)}>
        <ShoppingCartIcon />
        {count > 0 && <StyledFabCount count={count} />}
      </StyledDesktopContainer>
    </>
  );
};
