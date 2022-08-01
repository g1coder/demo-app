import React from 'react';
import LandingHeader from './LandingHeader';
import LandingMainSection from './LandingPageMainSection/LandingMainSection';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';

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
        <LandingMainSection />
      </StyledSectionContainer>
    </StyledMain>
  );
};

export default LandingPage;
