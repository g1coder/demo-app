import {Typography} from '@mui/material';
import {useCallback} from 'react';
import Routes from '@shared/constants/routes.constants';
import ErrorService from '@shared/api/services/ErrorService';
import AuthService from '../../api/AuthService';
import Form, {IFormValues} from './ui/SignupForm';
import {StyledFormContainer, StyledSignUpContainer} from './ui/styles';

const SignUp = () => {
  const handleSubmit = useCallback(
    (formData: IFormValues) => AuthService.signup(formData, 'token').catch(ErrorService.defaultFormHandler),
    []
  );

  return (
    <StyledFormContainer elevation={3}>
      <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
        Sign up
      </Typography>
      <>
        <Form onSubmit={handleSubmit} />
        <StyledSignUpContainer>
          <Typography variant="body2" color="primary.dark">
            Already have an account?
          </Typography>
          <Typography
            variant="body2"
            color="primary.dark"
            sx={{marginLeft: 1, cursor: 'pointer', textDecoration: 'underline'}}
            component="a"
            href={Routes.SIGN_IN.url}
          >
            Log in
          </Typography>
        </StyledSignUpContainer>
      </>
    </StyledFormContainer>
  );
};

export default SignUp;
