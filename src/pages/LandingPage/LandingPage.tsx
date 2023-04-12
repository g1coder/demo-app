import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'pages/LandingPage/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'pages/LandingPage/LandingPageRecentPostsSection/LandingPageRecentPostsSection';
import LandingPageFooterSection from 'pages/LandingPage/LandingPageFooterSection/LandingPageFooterSection';

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
