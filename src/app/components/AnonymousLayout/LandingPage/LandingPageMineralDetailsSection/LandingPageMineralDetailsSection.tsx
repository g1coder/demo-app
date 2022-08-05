import React from 'react';
import LandingPageSectionHeader from 'app/components/AnonymousLayout/LandingPage/LandingPageSectionHeader';
import MineralDetailsInfoItem from 'app/components/AnonymousLayout/LandingPage/LandingPageMineralDetailsSection/MineralDetailsInfoItem';
import {
  StyledContentColumn,
  StyledContentContainer,
  StyledSectionContainer,
  StyledBottleContainer
} from './LandingPageMineralDetailsSectionStyles';

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
      <LandingPageSectionHeader title="Mineral composition" subtitle="What inside" />
      <StyledContentContainer>
        <StyledContentColumn>
          {details.slice(0, 3).map((item) => (
            <MineralDetailsInfoItem {...item} />
          ))}
        </StyledContentColumn>
        <img src={`${process.env.PUBLIC_URL}/images/landing-page/bottle-dark-3.png`} alt="bottle bg" />
        <StyledBottleContainer />
        <StyledContentColumn>
          {details.slice(3, 6).map((item) => (
            <MineralDetailsInfoItem {...item} />
          ))}
        </StyledContentColumn>
      </StyledContentContainer>
    </StyledSectionContainer>
  );
};

export default LandingPageMineralDetailsSection;