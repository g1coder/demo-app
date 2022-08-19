import React from 'react';
import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'app/components/LandingPage/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'app/components/LandingPage/LandingPageRecentPostsSection/LandingPageRecentPostsSection';

const LandingPage = () => {
  return (
    <>
      <LandingPageMainSection />
      <LandingPageAboutSection />
      <LandingPageDeliverySection />
      <LandingPageMineralDetailsSection />
      <LandingPageReviewSection />
      <LandingPageRecentPostsSection />
    </>
  );
};

export default LandingPage;
