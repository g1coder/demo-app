import React from 'react';
import AppRoutes from 'app/router/AppRoutes';
import AppLogo from 'app/pages/LandingPage/presets/header-logo.png';
import {Typography} from '@mui/material';
import {
  StyledContainer,
  StyledAboutContainer,
  StyledButtonContainer,
  StyledAboutInfoContainer,
} from 'app/pages/MainLayout/MainLayoutFooter/MainLayoutFooterStyles';
import {StyledMainLayoutWrapper} from 'app/pages/MainLayout/MainLayout';

const MainLayoutFooter = () => {
  return (
    <StyledContainer>
      <StyledMainLayoutWrapper>
        <StyledAboutContainer>
          <a href={AppRoutes.LANDING_PAGE.url}>
            <img src={AppLogo} alt="company-logo" />
          </a>
          <Typography variant="body2" sx={{fontStyle: 'italic', margin: '32px 0'}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus
            tristique ligula quis orci malesuada tincidunt.
          </Typography>
          <StyledButtonContainer />
        </StyledAboutContainer>
      </StyledMainLayoutWrapper>
      <StyledAboutInfoContainer>
        <Typography variant="body2" component="a" href="https://github.com/g1coder" target="_blank">
          vsl
        </Typography>
        <Typography variant="body2" fontFamily={'sans-serif'}>
          © All Rights Reserved - 2022
        </Typography>
      </StyledAboutInfoContainer>
    </StyledContainer>
  );
};

export default MainLayoutFooter;
