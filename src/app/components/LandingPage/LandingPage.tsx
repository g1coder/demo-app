import React from 'react';
import LandingHeader from 'app/components/LandingPage/LandingPageHeader/LandingHeader';
import {styled} from '@mui/material/styles';
import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'app/components/LandingPage/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'app/components/LandingPage/LandingPageRecentPostsSection/LandingPageRecentPostsSection';
import LandingPageFooterSection from 'app/components/LandingPage/LandingPageFooterSection/LandingPageFooterSection';

const StyledMain = styled('main')(({theme: {palette}}) => ({
  backgroundColor: palette.primary.dark,
}));

const LandingPage = () => {
  return (
    <StyledMain>
      <LandingHeader />
      <LandingPageMainSection />
      <LandingPageAboutSection />
      <LandingPageDeliverySection />
      <LandingPageMineralDetailsSection />
      <LandingPageReviewSection />
      <LandingPageRecentPostsSection />
      <LandingPageFooterSection />
    </StyledMain>
  );
};

export default LandingPage;
