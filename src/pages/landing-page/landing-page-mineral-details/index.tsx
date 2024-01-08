import {LayoutWrapper} from '@widgets/main-layout';
import SectionHeader from '../SectionHeader';
import BottleDark from './bottle-dark-3.png';
import {StyledSectionContainer, StyledBottleContainer, StyledBottleBg} from './styles';
import {MineralDetails} from '@widgets/landing/mineral';

export const LandingPageMineralDetails = () => (
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
