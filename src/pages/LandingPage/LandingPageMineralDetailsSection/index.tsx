import LandingPageSectionHeader from 'pages/LandingPage/SectionHeader';
import {StyledSectionContainer, StyledBottleContainer, StyledBottleBg} from 'pages/LandingPage/LandingPageMineralDetailsSection/styles';
import MineralDetails from 'pages/LandingPage/LandingPageMineralDetailsSection/MineralDetails';
import BottleDark from './bottle-dark-3.png';
import {LayoutWrapper} from 'widgets';

const Index = () => {
  return (
    <StyledSectionContainer>
      <LayoutWrapper>
        <LandingPageSectionHeader title="Mineral composition" subtitle="What inside" />
        <MineralDetails>
          <>
            <StyledBottleBg src={BottleDark} alt="bottle bg" />
            <StyledBottleContainer />
          </>
        </MineralDetails>
      </LayoutWrapper>
    </StyledSectionContainer>
  );
};

export default Index;
