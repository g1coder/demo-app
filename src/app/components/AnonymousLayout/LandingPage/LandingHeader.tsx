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

const StyledLogoLink = styled('a')(() => ({
  '& > img': {
    border: 0,
    outline: '0 none',
  },
}));

export const StyledLogo = styled('img')(() => ({

}));

const LandingHeader = () => {
  return (
    <StyledHeader>
      <StyledLogoLink href={AppRoutes.LANDING_PAGE.path}>
        <StyledLogo src={process.env.PUBLIC_URL + '/images/header-logo.png'} alt="company-logo" />
      </StyledLogoLink>
    </StyledHeader>
  );
};

export default LandingHeader;
