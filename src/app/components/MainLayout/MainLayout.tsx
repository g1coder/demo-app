import React, {memo} from 'react';
import Box from '@mui/material/Box';
import {Outlet} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import MainLayoutHeader from 'app/components/MainLayout/MainLayoutHeader/MainLayoutHeader';
import MainLayoutFooter from 'app/components/MainLayout/MainLayoutFooter/MainLayoutFooter';
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from 'app/constants/constants';

export const StyledMainLayoutWrapper = styled('div')(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(5, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4),
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

const StyledMainLayout = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.dark,
  minHeight: '100vh',
}));

const StyledContentContainer = styled(Box)(({theme: {breakpoints}}) => ({
  [breakpoints.down('lg')]: {
    paddingTop: 40,
  },
}));

const MainLayout = () => {
  return (
    <StyledMainLayout component="main">
      <MainLayoutHeader />
      <StyledContentContainer>
        <Outlet />
      </StyledContentContainer>
      <MainLayoutFooter />
    </StyledMainLayout>
  );
};

export default memo(MainLayout);
