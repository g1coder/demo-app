import {useNavigate} from 'react-router-dom';
import {Paper, Typography} from '@mui/material';
import {Routes} from '@shared/constants';
import {ErrorService} from '@shared/services/';
import {SignUpForm, ISignUpFormValues, useSignUp} from '@features/authorization';
import {styled} from '@mui/material/styles';

const StyledFormContainer = styled(Paper)(({theme}) => ({
  width: '100%',
  padding: theme.spacing(4, 6),
  minWidth: 480,
  minHeight: 465,
}));

const StyledSignUpContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  marginTop: 24,
});

export const SignUp = () => {
  const signUp = useSignUp();
  const navigate = useNavigate();

  const handleSubmit = (formData: ISignUpFormValues) =>
    signUp.mutate(formData, {
      onError: ErrorService.defaultHandler,
      onSuccess: () => {
        navigate(Routes.LANDING_PAGE.url);
      },
    });

  return (
    <StyledFormContainer elevation={3}>
      <Typography variant="h4" sx={{textAlign: 'center', marginBottom: 3, textTransform: 'uppercase'}}>
        Sign up
      </Typography>
      <>
        <SignUpForm onSubmit={handleSubmit} />
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
