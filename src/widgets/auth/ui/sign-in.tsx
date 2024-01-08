import {useReducer} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Paper, Typography} from '@mui/material';

import {Routes} from '@shared/constants';
import {getNextFromUrl} from '@shared/utils';
import {ErrorService} from '@shared/services/';
import {ILoginFormValues, ResetPasswordForm, SignInForm, useResetPassword, useSignIn} from '@features/authorization';

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

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [showLogin, switchMode] = useReducer((state) => !state, true);

  const signIn = useSignIn();
  const resetResetPassword = useResetPassword();

  const onLoginHandler = (formData: ILoginFormValues) =>
    signIn.mutate(formData, {
      onError: ErrorService.defaultFormHandler,
      onSuccess: () => {
        const next = getNextFromUrl(location.search);
        navigate(next || Routes.LANDING_PAGE.url);
      },
    });

  return (
    <StyledContainer elevation={3}>
      <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
        {showLogin ? 'Sign in' : 'Reset password'}
      </Typography>
      {showLogin ? (
        <>
          <SignInForm onSubmit={onLoginHandler} onForgotPassword={switchMode} />
          <StyledSignUpContainer>
            <Typography variant="body2" color="primary.dark">
              Don't have an account?
            </Typography>
            <Typography
              variant="body2"
              color="primary.dark"
              sx={{marginLeft: 1, cursor: 'pointer', textDecoration: 'underline'}}
              component="a"
              href={Routes.SIGN_UP.url}
            >
              Sign up
            </Typography>
          </StyledSignUpContainer>
        </>
      ) : (
        <ResetPasswordForm onSubmit={({email}) => resetResetPassword.mutate({email})} onBack={switchMode} />
      )}
    </StyledContainer>
  );
};
