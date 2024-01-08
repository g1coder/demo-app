import {Form} from 'react-final-form';
import {TextField, Typography} from '@mui/material';
import {LayoutWrapper} from '@widgets/main-layout';
import {createValidator, required, email} from '@shared/services/validation-service';
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

export const LandingPageFooter = () => (
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
            <Form<IFormValues> onSubmit={() => {}} validate={emailValidator}>
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
