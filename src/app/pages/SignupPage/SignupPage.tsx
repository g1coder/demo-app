import React, {memo} from 'react';
import {
  StyledContainer,
  StyledFormContainer,
  StyledInnerContainer,
  StyledImageDecorator,
  StyledSignUpContainer,
} from 'app/pages/LoginPage/LoginPageStyles';
import {Typography} from '@mui/material';
import AppRoutes from 'core/constants/AppRoutes';
import SignupForm, {IFormValues as ISignupFormValues} from 'app/pages/SignupPage/SignupForm';

interface IProps {
  onSignup: (params: ISignupFormValues) => Promise<string | void>;
}

const SignupPage = ({onSignup}: IProps) => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledFormContainer elevation={3}>
          <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
            Sign up
          </Typography>
          <>
            <SignupForm onSubmit={onSignup} />
            <StyledSignUpContainer>
              <Typography variant="body2" color="primary.dark">
                Already have an account?
              </Typography>
              <Typography
                variant="body2"
                color="primary.dark"
                sx={{marginLeft: 1, cursor: 'pointer', textDecoration: 'underline'}}
                component="a"
                href={AppRoutes.LOGIN.url}
              >
                Log in
              </Typography>
            </StyledSignUpContainer>
          </>
        </StyledFormContainer>
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default memo(SignupPage);
