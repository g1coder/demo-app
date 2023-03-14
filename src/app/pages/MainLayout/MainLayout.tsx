import {memo} from 'react';
import Box from '@mui/material/Box';
import {Outlet} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import MainLayoutHeader from 'app/pages/MainLayout/MainLayoutHeader/MainLayoutHeader';
import MainLayoutFooter from 'app/pages/MainLayout/MainLayoutFooter/MainLayoutFooter';
import {LANDING_PAGE_XL_CONTAINER_WIDTH, LANDING_PAGE_HEADER_HEIGHT} from 'app/constants/constants';

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
  display: 'flex',
  flexDirection: 'column',
}));

const StyledMainLayoutContentContainer = styled(Box)(({theme: {breakpoints}}) => ({
  paddingTop: LANDING_PAGE_HEADER_HEIGHT,
  flex: '1 1 auto',
  [breakpoints.up('lg')]: {
    paddingTop: 40,
  },
}));

const MainLayout = () => {
  return (
    <StyledMainLayout component="main">
      <MainLayoutHeader />
      <StyledMainLayoutContentContainer>
        <Outlet />
      </StyledMainLayoutContentContainer>
      <MainLayoutFooter />
    </StyledMainLayout>
  );
};

export default memo(MainLayout);
