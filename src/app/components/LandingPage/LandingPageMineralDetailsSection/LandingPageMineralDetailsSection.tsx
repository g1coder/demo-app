import React from 'react';
import LandingPageSectionHeader from 'app/components/LandingPage/LandingPageSectionHeader';
import MineralDetailsInfoItem from 'app/components/LandingPage/LandingPageMineralDetailsSection/MineralDetailsInfoItem';
import {
  StyledContentColumn,
  StyledContentContainer,
  StyledSectionContainer,
  StyledBottleContainer, StyledBottleBg,
} from './LandingPageMineralDetailsSectionStyles';
import {StyledSectionPaddingWrapper} from 'app/components/LandingPage/LandingPageStyles';
import BottleDark from './bottle-dark-3.png';

const details = [
  {
    title: 'Calcium+',
    subtitle: '5-12 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Magnesium',
    subtitle: '2-5 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Sodium',
    subtitle: '20-25 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Chlorine',
    subtitle: '~46 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Sourness',
    subtitle: '6,8-7,3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
  {
    title: 'Mineralization',
    subtitle: '90-140 mg/dm3',
    text: 'Vestibulum non nisi tincidunt, pulvinar nibh sed, accumsan dui. In purus dolor.',
  },
];

const LandingPageMineralDetailsSection = () => {
  return (
    <StyledSectionContainer>
      <StyledSectionPaddingWrapper>
        <LandingPageSectionHeader title="Mineral composition" subtitle="What inside" />
        <StyledContentContainer>
          <StyledContentColumn>
            {details.slice(0, 3).map((item) => (
              <MineralDetailsInfoItem {...item} key={item.title} />
            ))}
          </StyledContentColumn>
          <StyledBottleBg src={BottleDark} alt="bottle bg" />
          <StyledBottleContainer />
          <StyledContentColumn>
            {details.slice(3, 6).map((item) => (
              <MineralDetailsInfoItem {...item} key={item.title} />
            ))}
          </StyledContentColumn>
        </StyledContentContainer>
      </StyledSectionPaddingWrapper>
    </StyledSectionContainer>
  );
};

export default LandingPageMineralDetailsSection;
