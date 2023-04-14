import {useCallback} from 'react';
import {Form} from 'react-final-form';
import {TextField, Typography} from '@mui/material';
import {createValidator, required, email} from '@shared/api/services/ValidationService';
import {LayoutWrapper} from '@widgets/main-layout';
import {
  StyledLandingPageFooterSection,
  StyledActionContainer,
  StyledSubscribeSection,
  StyledTextContainer,
  StyledSubscribeContainer,
  StyledSubcribeButton,
} from './styles';

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
      <LayoutWrapper>
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
      </LayoutWrapper>
    </StyledLandingPageFooterSection>
  );
};

export default LandingPageFooterSection;
