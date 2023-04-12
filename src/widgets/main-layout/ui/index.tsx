import {Outlet} from 'react-router-dom';
import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Header from './header';
import Footer from './footer';
import {LANDING_PAGE_HEADER_HEIGHT} from 'shared/constants';

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
      <Header />
      <StyledMainLayoutContentContainer>
        <Outlet />
      </StyledMainLayoutContentContainer>
      <Footer />
    </StyledMainLayout>
  );
};

export default MainLayout;
