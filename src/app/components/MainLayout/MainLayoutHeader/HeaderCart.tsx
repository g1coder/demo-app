import React, {memo} from 'react';
import {styled} from '@mui/material/styles';
import {Fab, Typography} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const DESKTOP_MODE = 'xl';

interface IProps {
  count: number;
  onClick: () => void;
}

const StyledMobileContainer = styled('div')(({theme: {breakpoints}}) => ({
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

const HeaderCart = ({count, onClick}: IProps) => (
  <>
    <StyledMobileContainer onClick={onClick}>
      <ShoppingCartIcon />
    </StyledMobileContainer>
    <StyledDesktopContainer aria-label="add" size="medium" onClick={onClick}>
      <ShoppingCartIcon />
      {count > 0 && <StyledFabCount count={count} />}
    </StyledDesktopContainer>
  </>
);

export default memo(HeaderCart);
