import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'pages/landing/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'pages/landing/LandingPageRecentPostsSection/LandingPageRecentPostsSection';
import LandingPageFooterSection from 'pages/landing/LandingPageFooterSection/LandingPageFooterSection';

const LandingPage = () => {
  return (
    <>
      <LandingPageMainSection />
      <LandingPageAboutSection />
      <LandingPageDeliverySection />
      <LandingPageMineralDetailsSection />
      <LandingPageReviewSection />
      <LandingPageRecentPostsSection />
      <LandingPageFooterSection />
    </>
  );
};

export default LandingPage;
