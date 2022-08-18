import React from 'react';
import {
  StyledLandingPageFooterSection,
  StyledAboutContainer,
  StyledActionContainer,
  StyledSubscribeSection,
  StyledTextContainer,
  StyledButtonContainer,
  StyledAboutInfoContainer,
  StyledSubscribeContainer, StyledSubcribeButton,
} from './LandingPageFooterSectionStyles';
import {StyledSectionPaddingWrapper} from 'app/components/LandingPage/LandingPageStyles';
import {Typography} from '@mui/material';
import TextField from 'core/components/Form/TextField';
import AppRoutes from 'core/constants/AppRoutes';
import AppLogo from 'app/components/LandingPage/presets/header-logo.png';

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
            <StyledSubcribeButton title="Subscribe" variant="action" />
          </StyledActionContainer>
        </StyledSubscribeSection>
      </StyledSubscribeContainer>

      <StyledAboutContainer>
        <a href={AppRoutes.LANDING_PAGE.path}>
          <img src={AppLogo} alt="company-logo" />
        </a>
        <Typography variant="body2" sx={{fontStyle: 'italic', margin: '32px 0'}}>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus tristique
          ligula quis orci malesuada tincidunt.
        </Typography>
        <StyledButtonContainer />
      </StyledAboutContainer>
    </StyledSectionPaddingWrapper>
    <StyledAboutInfoContainer>
      <Typography variant="body2" component="a" href="https://github.com/g1coder" target="_blank">
        vsl
      </Typography>
      <Typography variant="body2" fontFamily={'sans-serif'}>
        © All Rights Reserved - 2022
      </Typography>
    </StyledAboutInfoContainer>
  </StyledLandingPageFooterSection>
);

export default LandingPageFooterSection;
