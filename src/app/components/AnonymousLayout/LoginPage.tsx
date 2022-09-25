import React, {memo, useReducer} from 'react';
import LoginForm, {IFormValues as ILoginFormValues} from 'app/components/AnonymousLayout/LoginForm';
import {
  StyledContainer,
  StyledFormContainer,
  StyledInnerContainer,
  StyledImageDecorator,
  StyledSignUpContainer,
} from 'app/components/AnonymousLayout/LoginPageStyles';
import {Typography} from '@mui/material';
import LoginResetPasswordForm, {
  IFormValues as ILoginResetPasswordFormValues,
} from 'app/components/AnonymousLayout/LoginResetPasswordForm';
import AppRoutes from 'core/constants/AppRoutes';

interface IProps {
  onLogin: (params: ILoginFormValues) => Promise<string | void>;
  onReset: (params: ILoginResetPasswordFormValues) => Promise<string | void>;
}

const LoginPage = ({onLogin, onReset}: IProps) => {
  const [isLoginMode, switchMode] = useReducer((state) => !state, true);

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledFormContainer elevation={3}>
          <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
            {isLoginMode ? 'Sign in' : 'Reset password'}
          </Typography>
          {isLoginMode ? (
            <>
              <LoginForm onSubmit={onLogin} onForgotPassword={switchMode} />
              <StyledSignUpContainer>
                <Typography variant="body2" color="primary.dark">
                  Don't have an account?
                </Typography>
                <Typography
                  variant="body2"
                  color="primary.dark"
                  sx={{marginLeft: 1, cursor: 'pointer', textDecoration: 'underline'}}
                  component="a"
                  href={AppRoutes.SIGNUP.url}
                >
                  Sign up
                </Typography>
              </StyledSignUpContainer>
            </>
          ) : (
            <LoginResetPasswordForm onSubmit={onReset} onBack={switchMode} />
          )}
        </StyledFormContainer>
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default memo(LoginPage);
