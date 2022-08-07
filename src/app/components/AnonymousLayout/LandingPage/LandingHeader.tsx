import React from 'react';
import {styled} from '@mui/material/styles';
import AppRoutes from 'core/constants/AppRoutes';
import {
  LANDING_PAGE_HEADER_HEIGHT,
  LANDING_PAGE_LG_CONTAINER_WIDTH,
} from 'app/constants/constants';

const StyledHeader = styled('header')(({theme: {spacing}}) => ({
  padding: spacing(4, 0),
  margin: 'auto',
  maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
  minHeight: LANDING_PAGE_HEADER_HEIGHT
}));

const LandingHeader = () => {
  return (
    <StyledHeader>
      <a href={AppRoutes.LANDING_PAGE.path}>
        <img src={process.env.PUBLIC_URL + '/images/header-logo.png'} alt="company-logo" />
      </a>
    </StyledHeader>
  );
};

export default LandingHeader;
