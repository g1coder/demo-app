import {Typography} from '@mui/material';
import {FORM_ERROR} from 'final-form';
import { useCallback, useContext } from "react";
import AppRoutes from '@shared/constants/AppRoutes';
import {AuthContext, IAuthContext} from "../../lib/AuthProvider";
import Form, {IFormValues} from './ui/form';
import {StyledFormContainer, StyledSignUpContainer} from './ui/styles';

const SignUp = () => {
  const {signup} = useContext<IAuthContext>(AuthContext);

  const handleSubmit = useCallback(
    (formData: IFormValues) => {
      return signup(formData, 'token').catch((error: Error) => {
        return {[FORM_ERROR]: error.message};
      });
    },
    [signup]
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
            href={AppRoutes.LOGIN.url}
          >
            Log in
          </Typography>
        </StyledSignUpContainer>
      </>
    </StyledFormContainer>
  );
};

export default SignUp;
