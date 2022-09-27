import React, {useCallback} from 'react';
import {Form} from 'react-final-form';
import {
  StyledLandingPageFooterSection,
  StyledActionContainer,
  StyledSubscribeSection,
  StyledTextContainer,
  StyledSubscribeContainer,
  StyledSubcribeButton,
} from './LandingPageFooterSectionStyles';
import {Typography} from '@mui/material';
import TextField from 'core/components/FinalForm/TextField';
import {StyledMainLayoutWrapper} from 'app/components/MainLayout/MainLayout';
import {createValidator, required, email} from 'core/services/ValidationService';

interface IFormValues {
  email: string;
}

const emailValidator = createValidator<IFormValues>({
  email: [required, email],
});

const LandingPageFooterSection = () => {
  const sendEmail = useCallback(() => {}, []);

  return (
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
              <Form<IFormValues> onSubmit={sendEmail} validate={emailValidator}>
                {({handleSubmit}) => (
                  <form onSubmit={handleSubmit}>
                    <TextField
                      name="email"
                      placeholder="Your email addreess"
                      InputProps={{sx: {backgroundColor: '#fff', maxHeight: '48px'}}}
                      fullWidth
                    />
                    <StyledSubcribeButton title="Subscribe" buttonType="action" type="submit" />
                  </form>
                )}
              </Form>
            </StyledActionContainer>
          </StyledSubscribeSection>
        </StyledSubscribeContainer>
      </StyledMainLayoutWrapper>
    </StyledLandingPageFooterSection>
  );
};

export default LandingPageFooterSection;
