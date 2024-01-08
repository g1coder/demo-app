import {LandingPageAbout} from './landing-page-about';
import {LandingPageDelivery} from './landing-page-delivery';
import {LandingPageFooter} from './landing-page-footer-section';
import {LandingPageMain} from './landing-page-main';
import {LandingPageMineralDetails} from './landing-page-mineral-details';
import {LandingPageRecentPosts} from './landing-page-recent-posts';
import {LandingPageReview} from './landing-page-review';

const LandingPage = () => (
  <>
    <LandingPageMain />
    <LandingPageAbout />
    <LandingPageDelivery />
    <LandingPageMineralDetails />
    <LandingPageReview />
    <LandingPageRecentPosts />
    <LandingPageFooter />
  </>
);

export default LandingPage;
