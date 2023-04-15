import {Paper, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useCallback, useReducer} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import RouteConstants from '@shared/constants/route.constants';
import Utils from '@shared/helpers/Utils';
import AuthService from '@widgets/auth/api/AuthService';
import ErrorService from '@shared/api/services/ErrorService';
import LoginForm, {IFormValues as ILoginFormValues} from './ui/LoginForm';
import ResetPasswordForm from './ui/ResetPasswordForm';

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

const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, switchMode] = useReducer((state) => !state, true);

  const handleLogin = useCallback(
    async (values: ILoginFormValues) => {
      try {
        await AuthService.login(values);
        const next = Utils.getNextFromUrl(location.search);
        navigate(next || RouteConstants.LANDING_PAGE.url);
      } catch (error) {
        return ErrorService.defaultFormHandler(error);
      }
    },
    [location.search, navigate]
  );

  return (
    <StyledContainer elevation={3}>
      <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
        {showLogin ? 'Sign in' : 'Reset password'}
      </Typography>
      {showLogin ? (
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
              href={RouteConstants.SIGNUP.url}
            >
              Sign up
            </Typography>
          </StyledSignUpContainer>
        </>
      ) : (
        <ResetPasswordForm onSubmit={AuthService.resetPwd} onBack={switchMode} />
      )}
    </StyledContainer>
  );
};

export default SignIn;