import {useCallback, useReducer} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {FORM_ERROR} from 'final-form';
import {Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

import AppRoutes from '@shared/constants/AppRoutes';
import Utils from '@shared/helpers/Utils';
import withContextSelector from '@shared/lib/HOC/withContextSelector';
import LoginForm, {IFormValues as ILoginFormValues} from './ui/login-form';
import ResetPasswordForm from './ui/reset-pwd-form';
import {AuthContext, IAuthContext} from "../../lib/AuthProvider";

export const StyledContainer = styled(Paper)(({theme}) => ({
  width: '100%',
  padding: theme.spacing(4, 6),
  minWidth: 480,
  minHeight: 465,
}));

export const StyledSignUpContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 24,
});

const LoginPage = ({login, reset}: Pick<IAuthContext, 'login' | 'reset'>) => {
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
    <StyledContainer elevation={3}>
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
        <ResetPasswordForm onSubmit={reset} onBack={switchMode} />
      )}
    </StyledContainer>
  );
};

export default withContextSelector<unknown, IAuthContext>(LoginPage, AuthContext, {
  login: (data) => data.login,
  reset: (data) => data.reset,
});
