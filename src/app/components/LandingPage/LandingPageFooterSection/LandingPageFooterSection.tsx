import React from 'react';
import {
  StyledLandingPageFooterSection,
  StyledActionContainer,
  StyledSubscribeSection,
  StyledTextContainer,
  StyledSubscribeContainer,
  StyledSubcribeButton,
} from './LandingPageFooterSectionStyles';
import {Typography} from '@mui/material';
import TextField from 'core/components/Form/TextField';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';

const LandingPageFooterSection = () => (
  <StyledLandingPageFooterSection>
    <StyledMainLayoutWrapper>
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
    </StyledMainLayoutWrapper>
  </StyledLandingPageFooterSection>
);

export default LandingPageFooterSection;
