import {useCallback} from "react";
import {
  StyledContainer,
  StyledFormContainer,
  StyledInnerContainer,
  StyledImageDecorator,
  StyledSignUpContainer,
} from 'pages/LoginPage/LoginPageStyles';
import {Typography} from '@mui/material';
import AppRoutes from 'app/router/AppRoutes';
import SignupForm, {IFormValues} from 'pages/SignupPage/SignupForm';
import AppContext, {IAppContext} from "app/AppContext";
import withContextSelector from "shared/lib/HOC/withContextSelector";
import {FORM_ERROR} from "final-form";

const SignupPage = ({signup}: Pick<IAppContext, 'signup'>) => {
  const handleSubmit = useCallback((formData: IFormValues) => {
    return signup(formData, 'token').catch((error: Error) => {
      return {[FORM_ERROR]: error.message};
    });
  }, [signup]);

  return (
    <StyledContainer>
      <StyledInnerContainer>
        <StyledFormContainer elevation={3}>
          <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
            Sign up
          </Typography>
          <>
            <SignupForm onSubmit={handleSubmit} />
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

export default withContextSelector<unknown, IAppContext>(SignupPage, AppContext, {
  signup: data => data.signup
});
