import LandingPageAboutSection from './LandingPageAboutSection';
import LandingPageDeliverySection from './LandingPageDeliverySection';
import LandingPageFooterSection from './LandingPageFooterSection';
import LandingPageMainSection from './LandingPageMainSection';
import LandingPageMineralDetailsSection from './LandingPageMineralDetailsSection';
import LandingPageRecentPostsSection from './LandingPageRecentPostsSection';
import LandingPageReviewSection from './LandingPageReviewSection';

const LandingPage = () => (
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

export default LandingPage;
