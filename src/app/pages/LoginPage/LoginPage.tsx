import React, {useCallback, useReducer} from 'react';
import LoginForm, {IFormValues as ILoginFormValues} from 'app/pages/LoginPage/LoginForm';
import {
  StyledContainer,
  StyledFormContainer,
  StyledInnerContainer,
  StyledImageDecorator,
  StyledSignUpContainer,
} from 'app/pages/LoginPage/LoginPageStyles';
import {Typography} from '@mui/material';
import LoginResetPasswordForm from 'app/pages/LoginPage/LoginResetPasswordForm';
import AppRoutes from 'app/router/AppRoutes';
import {useLocation, useNavigate} from 'react-router-dom';
import Utils from 'core/services/Utils';
import {FORM_ERROR} from 'final-form';
import withContextSelector from 'core/HOC/withContextSelector';
import AppContext, {IAppContext} from 'app/AppContext';

const LoginPage = ({login, reset}: Pick<IAppContext, 'login' | 'reset'>) => {
  const navigage = useNavigate();
  const location = useLocation();

  const [isLoginMode, switchMode] = useReducer((state) => !state, true);

  const handleLogin = useCallback(
    (data: ILoginFormValues) => {
      return login(data)
        .then(() => {
          const next = Utils.getNextFromUrl(location.search);
          if (next) {
            return navigage(next);
          }
        })
        .catch((e: Error) => {
          return {[FORM_ERROR]: e.message};
        });
    },
    [location.search, navigage, login]
  );

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
            <LoginResetPasswordForm onSubmit={reset} onBack={switchMode} />
          )}
        </StyledFormContainer>
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default withContextSelector<unknown, IAppContext>(LoginPage, AppContext, {
  login: (data) => data.login,
  reset: (data) => data.reset,
});
