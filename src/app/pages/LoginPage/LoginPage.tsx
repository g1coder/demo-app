import React, {memo, useCallback, useReducer} from 'react';
import LoginForm, {IFormValues as ILoginFormValues} from 'app/pages/LoginPage/LoginForm';
import {
  StyledContainer,
  StyledFormContainer,
  StyledInnerContainer,
  StyledImageDecorator,
  StyledSignUpContainer,
} from 'app/pages/LoginPage/LoginPageStyles';
import {Typography} from '@mui/material';
import LoginResetPasswordForm, {
  IFormValues as ILoginResetPasswordFormValues,
} from 'app/pages/LoginPage/LoginResetPasswordForm';
import AppRoutes from 'core/constants/AppRoutes';
import {useLocation, useNavigate} from "react-router-dom";
import Utils from "core/services/Utils";


interface IProps {
  onLogin: (params: ILoginFormValues) => Promise<string | void>;
  onReset: (params: ILoginResetPasswordFormValues) => Promise<string | void>;
}

const LoginPage = ({onLogin, onReset}: IProps) => {
  const navigage = useNavigate();
  const location = useLocation();

  const [isLoginMode, switchMode] = useReducer((state) => !state, true);

  const handleLogin = useCallback((data: ILoginFormValues) => {
    return onLogin(data).then(() => {
      const next = Utils.getNextFromUrl(location.search);
      if (next) {
        return navigage(next)
      }
    });
  }, [location.search, navigage, onLogin]);

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledFormContainer elevation={3}>
          <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
            {isLoginMode ? 'Sign in' : 'Reset password'}
          </Typography>
          {isLoginMode ? (
            <>
              <LoginForm onSubmit={handleLogin} onForgotPassword={switchMode} />
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
