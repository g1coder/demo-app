import LandingPageSectionHeader from 'pages/landing/LandingPageSectionHeader';
import {StyledSectionContainer, StyledBottleContainer, StyledBottleBg} from './LandingPageMineralDetailsSectionStyles';
import BottleDark from './bottle-dark-3.png';
import {StyledMainLayoutWrapper} from 'pages/MainLayout/MainLayout';
import LandingPageMineralDetails from 'pages/landing/LandingPageMineralDetailsSection/LandingPageMineralDetails';

const LandingPageMineralDetailsSection = () => {
  return (
    <StyledSectionContainer>
      <StyledMainLayoutWrapper>
        <LandingPageSectionHeader title="Mineral composition" subtitle="What inside" />
        <LandingPageMineralDetails>
          <>
            <StyledBottleBg src={BottleDark} alt="bottle bg" />
            <StyledBottleContainer />
          </>
        </LandingPageMineralDetails>
      </StyledMainLayoutWrapper>
    </StyledSectionContainer>
  );
};

export default LandingPageMineralDetailsSection;
