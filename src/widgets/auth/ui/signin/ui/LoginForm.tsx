import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {memo} from 'react';
import {useFormState, useField, FormRenderProps} from 'react-final-form';
import {createValidator, email, required} from '@shared/api/services/ValidationService';
import withFinalForm from '@shared/lib/HOC/withFinalForm';
import PrimaryButton from '@shared/ui-kit/Button/PrimaryButton';
import { UtilityHelper } from "@shared/helpers";
import {StyledForm, StyledFieldLabel, StyledBtnContainer, StyledForgotPwdLink} from './styles'

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

  const {input: usernameInput, meta: usernameMeta} = useField(UtilityHelper.nameOf<IFormValues>('email'));
  const {input: passwordInput, meta: passwordMeta} = useField(UtilityHelper.nameOf<IFormValues>('password'));

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
        {submitError ? String(submitError) : ` `}
      </FormHelperText>
      <StyledBtnContainer>
        <PrimaryButton title="Sign in" disabled={submitting} type="submit" />
      </StyledBtnContainer>
    </StyledForm>
  );
};

export default memo(withFinalForm<IProps, IFormValues>(LoginForm, formValidator));
