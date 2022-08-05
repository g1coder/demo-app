import React from 'react';
import {styled} from '@mui/material/styles';
import LandingPageSectionHeader from 'app/components/AnonymousLayout/LandingPage/LandingPageSectionHeader';

interface IProps {

}


const StyledLandingPageReviewSection = styled('section')(() => ({

}));

const LandingPageReviewSection = (props: IProps) => {
  return (
    <StyledLandingPageReviewSection>
      <LandingPageSectionHeader title="What our clients say" subtitle="Testimonials" />

    </StyledLandingPageReviewSection>
  )
};

export default LandingPageReviewSection;