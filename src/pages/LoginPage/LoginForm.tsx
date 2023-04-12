import {memo} from 'react';
import {useFormState, useField, FormRenderProps} from 'react-final-form';
import {createValidator, email, required} from 'shared/core/services/ValidationService';
import PrimaryButton from 'shared/Button/PrimaryButton';
import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Utils from 'shared/core/services/Utils';
import withFinalForm from 'shared/HOC/withFinalForm';

const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
});

const StyledFieldLabel = styled('div')(({theme}) => ({
  marginBottom: theme.spacing(-1.5),
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledForgotPwdLink = styled(Typography)({
  textDecoration: 'underline',
  cursor: 'pointer',
});

const StyledBtnContainer = styled('div')(({theme}) => ({
  margin: 'auto',
  marginTop: theme.spacing(2),
}));

export interface IFormValues {
  email: string;
  password: string;
}

interface IProps {
  onSubmit: (values: IFormValues) => void;
  onForgotPassword: () => void;
}

const formValidator = createValidator<IFormValues>({
  email: [required, email],
  password: [required],
});

const LoginForm = ({handleSubmit, onForgotPassword}: IProps & FormRenderProps<IFormValues>) => {
  const {submitting, submitError} = useFormState<IFormValues>({
    subscription: {values: true, valid: true, pristine: true, submitError: true},
  });

  const {input: usernameInput, meta: usernameMeta} = useField(Utils.nameOf<IFormValues>('email'));
  const {input: passwordInput, meta: passwordMeta} = useField(Utils.nameOf<IFormValues>('password'));

  return (
    <StyledForm onSubmit={handleSubmit}>
      <FormControl fullWidth margin="dense">
        <StyledFieldLabel>
          <Typography variant="caption" fontWeight={600}>
            Email address
          </Typography>
        </StyledFieldLabel>
        <TextField
          {...usernameInput}
          margin="normal"
          error={usernameMeta.touched && !!usernameMeta.error}
          helperText={usernameMeta.touched && !!usernameMeta.error ? 'Enter your email' : ` `}
          placeholder="user@gmail.com"
          aria-label="user name"
          autoFocus
        />
      </FormControl>

      <FormControl fullWidth margin="dense">
        <StyledFieldLabel>
          <Typography variant="caption" fontWeight={600}>
            Password
          </Typography>
          <StyledForgotPwdLink variant="caption" onClick={onForgotPassword}>
            Forgot your password?
          </StyledForgotPwdLink>
        </StyledFieldLabel>
        <TextField
          {...passwordInput}
          margin="normal"
          error={passwordMeta.touched && !!passwordMeta.error}
          helperText={passwordMeta.touched && !!passwordMeta.error ? 'Enter password' : ` `}
          placeholder="123"
          aria-label="password"
        />
      </FormControl>
      <FormHelperText sx={{mt: -2}} error={!!submitError}>
        {!!submitError ? String(submitError) : ` `}
      </FormHelperText>
      <StyledBtnContainer>
        <PrimaryButton title="Sign in" disabled={submitting} type="submit" />
      </StyledBtnContainer>
    </StyledForm>
  );
};

export default memo(withFinalForm<IProps, IFormValues>(LoginForm, formValidator));
