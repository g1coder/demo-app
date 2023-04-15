import {Outlet} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {Header, Footer} from '@widgets/main-layout';
import {LANDING_PAGE_HEADER_HEIGHT} from '@shared/constants/ui.constants';
import {AuthProvider} from '@widgets/auth';

const StyledContainer = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.dark,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const StyledContentContainer = styled(Box)(({theme: {breakpoints}}) => ({
  paddingTop: LANDING_PAGE_HEADER_HEIGHT,
  flex: '1 1 auto',
  [breakpoints.up('lg')]: {
    paddingTop: 40,
  },
}));

const MainLayout = () => {
  return (
    <AuthProvider>
      <StyledContainer component="main">
        <Header />
        <StyledContentContainer>
          <Outlet />
        </StyledContentContainer>
        <Footer />
      </StyledContainer>
    </AuthProvider>
  );
};

export default MainLayout;
