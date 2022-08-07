import React from 'react';
import LandingHeader from './LandingHeader';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';
import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'app/components/AnonymousLayout/LandingPage/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'app/components/AnonymousLayout/LandingPage/LandingPageRecentPostsSection/LandingPageRecentPostsSection';
import LandingPageFooterSection from 'app/components/AnonymousLayout/LandingPage/LandingPageFooterSection/LandingPageFooterSection';
import {Typography} from '@mui/material';

const StyledMain = styled('main')(({theme: {palette}}) => ({
  backgroundColor: palette.primary.dark,
}));

const StyledSectionContainer = styled('div')(({theme: {breakpoints}}) => ({
  [breakpoints.up('lg')]: {
    maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
    margin: 'auto',
  },
}));

const StyledLandingFooter = styled('footer')(({theme: {palette, spacing}}) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#001c5c',
  color: palette.text.whitePrimary,
  padding: spacing(4, 0),
  '& > a': {
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    color: palette.primary.light,
    marginRight: spacing(2),
    transition: 'color 0.3s ease',
    '&:hover': {
      color: palette.text.whitePrimary,
    },
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
        <LandingPageMineralDetailsSection />
        <LandingPageReviewSection />
        <LandingPageRecentPostsSection />
        <LandingPageFooterSection />
      </StyledSectionContainer>
      <StyledLandingFooter>
        <Typography variant="body2" component="a" href="#hh-resume-link">
          vsl
        </Typography>
        <Typography variant="body2" fontFamily={'sans-serif'}>© All Rights Reserved - 2022</Typography>
      </StyledLandingFooter>
    </StyledMain>
  );
};

export default LandingPage;
