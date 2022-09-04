import React from 'react';
import {styled} from '@mui/material/styles';
import AppRoutes from 'core/constants/AppRoutes';
import AppLogo from 'app/components/LandingPage/presets/header-logo.png';

const StyledLogoContainer = styled('figure')(({theme: {breakpoints}}) => ({
  margin: 0,
  '& > a > img': {
    maxWidth: 180,
  },
  [breakpoints.up('lg')]: {
    '& > a > img': {
      maxWidth: 200,
    },
  },
}));

const HeaderLogo = () => (
  <StyledLogoContainer>
    <a href={AppRoutes.LANDING_PAGE.url}>
      <img src={AppLogo} alt="company-logo" />
    </a>
  </StyledLogoContainer>
);

export default HeaderLogo;
