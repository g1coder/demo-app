import React from 'react';
import {
  StyledLandingPageFooterSection,
  StyledAboutContainer,
  StyledActionContainer,
  StyledSubscribeSection,
  StyledTextContainer,
  StyledButtonContainer, StyledAboutInfoContainer, StyledSubscribeContainer,
} from './LandingPageFooterSectionStyles';
import {StyledSectionPaddingWrapper} from 'app/components/AnonymousLayout/LandingPage/LandingPageStyles';
import {Typography} from '@mui/material';
import TextField from 'core/components/Form/TextField';
import CircleButton from 'core/components/Buttons/CircleButton';
import AppRoutes from 'core/constants/AppRoutes';

const LandingPageFooterSection = () => (
  <StyledLandingPageFooterSection>
    <StyledSectionPaddingWrapper>

      <StyledSubscribeContainer>

      <StyledSubscribeSection>
        <StyledTextContainer>
          <Typography variant="h5" textTransform="uppercase">
            Subscribe
          </Typography>
          <Typography variant="h5" color="primary.dark">
            Weekly newsletter
          </Typography>
        </StyledTextContainer>
        <StyledActionContainer>
          <TextField
            placeholder="Your email addreess"
            InputProps={{sx: {backgroundColor: '#fff', maxHeight: '48px'}}}
            fullWidth
          />
          <CircleButton title="Subscribe" variant="action" sx={{position: 'absolute', right: -30}} />
        </StyledActionContainer>
      </StyledSubscribeSection>

      </StyledSubscribeContainer>

      <StyledAboutContainer>
        <a href={AppRoutes.LANDING_PAGE.path}>
          <img src={process.env.PUBLIC_URL + '/images/header-logo.png'} alt="company-logo" />
        </a>
        <Typography variant="body2" sx={{fontStyle: 'italic', margin: '32px 0'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus tristique
          ligula quis orci malesuada tincidunt.
        </Typography>
        <StyledButtonContainer />
      </StyledAboutContainer>
    </StyledSectionPaddingWrapper>
    <StyledAboutInfoContainer>
      <Typography variant="body2" component="a" href="#hh-resume-link">
        vsl
      </Typography>
      <Typography variant="body2" fontFamily={'sans-serif'}>
        © All Rights Reserved - 2022
      </Typography>
    </StyledAboutInfoContainer>
  </StyledLandingPageFooterSection>
);

export default LandingPageFooterSection;
