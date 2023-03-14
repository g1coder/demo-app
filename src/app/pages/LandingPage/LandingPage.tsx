import LandingPageMainSection from './LandingPageMainSection/LandingPageMainSection';
import LandingPageAboutSection from './LandingPageAboutSection/LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection/LandingPageDeliverySection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection/LandingPageMineralDetailsSection';
import LandingPageReviewSection from 'app/pages/LandingPage/LandingPageReviewSection/LandingPageReviewSection';
import LandingPageRecentPostsSection from 'app/pages/LandingPage/LandingPageRecentPostsSection/LandingPageRecentPostsSection';
import LandingPageFooterSection from 'app/pages/LandingPage/LandingPageFooterSection/LandingPageFooterSection';

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
