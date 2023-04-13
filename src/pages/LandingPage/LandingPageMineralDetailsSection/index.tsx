import {LayoutWrapper} from "widgets/main-layout";
import MineralDetails from './MineralDetails';
import SectionHeader from '../SectionHeader';
import BottleDark from './bottle-dark-3.png';
import {StyledSectionContainer, StyledBottleContainer, StyledBottleBg} from './styles';

const LandingPageMineralDetailsSection = () => {
  return (
    <StyledSectionContainer>
      <LayoutWrapper>
        <SectionHeader title="Mineral composition" subtitle="What inside" />
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

export default LandingPageMineralDetailsSection;
