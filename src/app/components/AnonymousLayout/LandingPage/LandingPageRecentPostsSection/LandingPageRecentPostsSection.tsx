import React from 'react';
import {styled} from '@mui/material/styles';
import LandingPageSectionHeader from 'app/components/AnonymousLayout/LandingPage/LandingPageSectionHeader';

interface IProps {

}


const StyledLandingPageRecentPostsSection = styled('section')(() => ({

}));

const LandingPageRecentPostsSection = (props: IProps) => {
  return (
    <StyledLandingPageRecentPostsSection>
      <LandingPageSectionHeader title="Recent posts" subtitle="Our Blog" />

    </StyledLandingPageRecentPostsSection>
  )
};

export default LandingPageRecentPostsSection;