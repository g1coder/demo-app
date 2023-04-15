import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Fab, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {memo, useCallback} from 'react';
import {useNavigate} from 'react-router-dom';
import RouteConstants from '@shared/constants/route.constants';

const DESKTOP_MODE = 'xl';

interface IProps {
  count: number;
}

const StyledMobileContainer = styled('div')(({theme: {breakpoints}}) => ({
  cursor: 'pointer',
  [breakpoints.up(DESKTOP_MODE)]: {
    display: 'none',
  },
}));

const StyledFabCount = styled(({count, ...rest}: Omit<IProps, 'onClick'>) => (
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

const CartHeader = ({count}: IProps) => {
  const navigate = useNavigate();

  const handleCartClick = useCallback(() => {
    navigate(RouteConstants.CART.url);
  }, [navigate]);

  return (
    <>
      <StyledMobileContainer onClick={handleCartClick}>
        <ShoppingCartIcon />
      </StyledMobileContainer>
      <StyledDesktopContainer aria-label="add" size="medium" onClick={handleCartClick}>
        <ShoppingCartIcon />
        {count > 0 && <StyledFabCount count={count} />}
      </StyledDesktopContainer>
    </>
  );
};

export default memo(CartHeader);
