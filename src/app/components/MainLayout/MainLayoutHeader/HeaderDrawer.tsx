import React, {memo, useReducer} from 'react';
import {styled} from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import {SwipeableDrawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import HeaderNavigation from 'app/components/MainLayout/MainLayoutHeader/HeaderNavigation';
import HeaderLogin from 'app/components/MainLayout/MainLayoutHeader/HeaderLogin';

interface IProps {
  items: Array<{name: string; url: string}>;
}

const StyledDrawerNav = styled('div')(({theme: {palette, spacing}}) => ({
  minWidth: 300,
  maxWidth: '90vw',
  marginLeft: spacing(4),

  '& > nav': {
    '& > ul': {
      listStyleType: 'none',
      cursor: 'pointer',
      margin: spacing(0, 0, 4, 0),
      padding: 0,
      display: 'block',
      '& > li > a': {
        transition: 'color .3s ease',
        textDecoration: 'none',
        color: palette.primary.dark,
        '&:hover': {
          textDecoration: 'underline',
          color: palette.primary.light,
        },
      },
    },
  },
}));

const StyledDrawer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'block',
  [breakpoints.up('lg')]: {
    display: 'none',
  },
}));

const StyledCloseIcon = styled('span')(() => ({
  textAlign: 'right',
  padding: 10,
  cursor: 'pointer',
}));

const HeaderDrawer = ({items}: IProps) => {
  const [isDrawerOpen, toggleDrawer] = useReducer((state) => !state, false);

  return (
    <StyledDrawer>
      <MenuIcon onClick={toggleDrawer} />

      <SwipeableDrawer open={isDrawerOpen} onClose={toggleDrawer} onOpen={toggleDrawer}>
        <StyledCloseIcon onClick={toggleDrawer}>
          <CloseIcon fontSize="large" />
        </StyledCloseIcon>

        <StyledDrawerNav>
          <HeaderNavigation items={items} />
          <HeaderLogin inDrawer />
        </StyledDrawerNav>
      </SwipeableDrawer>
    </StyledDrawer>
  );
};

export default memo(HeaderDrawer);