import React from 'react';
import {styled} from '@mui/material/styles';
import AppRoutes from 'core/constants/AppRoutes';
import AppLogo from 'app/components/LandingPage/presets/header-logo.png';

const StyledLogo = styled('img')(({theme: {breakpoints}}) => ({
  margin: 0,
  maxWidth: 180,
  userSelect: 'none',
  [breakpoints.up('lg')]: {
    maxWidth: 200,
  },
  [breakpoints.up('xl')]: {
    maxWidth: '100%',
  },
}));

const HeaderLogo = () => (
  <a href={AppRoutes.LANDING_PAGE.url}>
    <StyledLogo src={AppLogo} alt="company-logo" />
  </a>
);

export default HeaderLogo;
