import React from 'react';
import LandingHeader from './LandingHeader';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';
import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from "./LandingPageAboutSection/LandingPageAboutSection";
import LandingPageDeliverySection from "./LandingPageDeliverySection/LandingPageDeliverySection";

const StyledMain = styled('main')(({theme: {palette}}) => ({
  backgroundColor: palette.primary.dark,
}));

const StyledSectionContainer = styled('div')(({theme: {breakpoints}}) => ({
  [breakpoints.up('lg')]: {
    maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
    margin: 'auto',
  },
}));

const LandingPage = () => {
  return (
    <StyledMain>
      <LandingHeader />
      <StyledSectionContainer>
        <LandingPageMainSection />
        <LandingPageAboutSection />
        <LandingPageDeliverySection />
      </StyledSectionContainer>
    </StyledMain>
  );
};

export default LandingPage;
