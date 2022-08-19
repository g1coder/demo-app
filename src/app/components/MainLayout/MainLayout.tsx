import React, {memo} from 'react';
import Box from '@mui/material/Box';
import {Outlet} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import LandingHeader from 'app/components/LandingPage/LandingPageHeader/LandingHeader';
import LandingPageFooterSection from 'app/components/LandingPage/LandingPageFooterSection/LandingPageFooterSection';

const StyledMainLayout = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.dark,
  minHeight: '100vh',
}));

const MainLayout = () => {
  return (
    <StyledMainLayout component="main">
      <LandingHeader />
      <Outlet />
      <LandingPageFooterSection />
    </StyledMainLayout>
  );
};

export default memo(MainLayout);
