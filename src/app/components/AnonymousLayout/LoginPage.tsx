import React, {memo, useCallback, useReducer, useState} from 'react';
import LoginForm, {IFormValues as ILoginFormValues} from 'app/components/AnonymousLayout/LoginForm';
import {
  StyledContainer,
  StyledFormContainer,
  StyledLeftPanel,
  StyledLeftPanelImage,
  StyledRightPanel,
  StyledRightPanelCenterWrapper,
  StyledInfoMessage,
} from 'app/components/AnonymousLayout/LoginPageStyles';
import {Typography} from '@mui/material';
import LoginResetPasswordForm, {
  IFormValues as ILoginResetPasswordFormValues,
} from 'app/components/AnonymousLayout/LoginResetPasswordForm';

const RESET_PWD_SUCCESS_MESSAGE = "If you have an account, we'll email you a reset link.";
const LOGIN_ERROR_MESSAGE = 'You entered an incorrect email, password, or both. Need an account?';

interface IProps {
  onLogin: (params: ILoginFormValues) => Promise<void>;
  onReset: (params: ILoginResetPasswordFormValues) => Promise<void>;
}

const headerMessages = (mode: boolean) =>
  mode
    ? {title: 'Sign in to the App', subtitle: 'Enter your details below'}
    : {title: 'Forgot your password?', subtitle: 'We’ll help you reset it and get back on track.'};

const LoginPage = ({onLogin, onReset}: IProps) => {
  const [isLoginMode, switchMode] = useReducer((state) => !state, true);
  const [operationResult, setOperationResult] = useState<{message: string; variant: 'success' | 'error'} | undefined>();

  const onLoginHandler = useCallback(
    (data: ILoginFormValues) => {
      return onLogin(data)
        .then(() => setOperationResult(undefined))
        .catch(() => {
          setOperationResult({message: LOGIN_ERROR_MESSAGE, variant: 'error'});
        });
    },
    [onLogin]
  );

  const onResetHandler = useCallback(
    (data: ILoginResetPasswordFormValues) => {
      return onReset(data).then(() => {
        switchMode();
        setOperationResult({message: RESET_PWD_SUCCESS_MESSAGE, variant: 'success'});
      });
    },
    [onReset]
  );

  return (
    <StyledContainer>
      <StyledLeftPanel>
        <StyledLeftPanelImage />
      </StyledLeftPanel>

      <StyledRightPanel>
        <StyledRightPanelCenterWrapper>
          <Typography align="left" variant="h4">
            {headerMessages(isLoginMode).title}
          </Typography>
          <Typography align="left" variant="subtitle2">
            {headerMessages(isLoginMode).subtitle}
          </Typography>

          <StyledFormContainer>
            {operationResult && (
              <StyledInfoMessage variant={operationResult.variant}>
                <Typography variant="subtitle2">{operationResult.message}</Typography>
              </StyledInfoMessage>
            )}

            {isLoginMode ? (
              <LoginForm onLogin={onLoginHandler} onForgotPassword={switchMode} />
            ) : (
              <LoginResetPasswordForm onReset={onResetHandler} onBack={switchMode} />
            )}
          </StyledFormContainer>

        </StyledRightPanelCenterWrapper>
      </StyledRightPanel>
    </StyledContainer>
  );
};

export default memo(LoginPage);
