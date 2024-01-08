import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {memo} from 'react';
import {useFormState, useField, FormRenderProps} from 'react-final-form';
import {createValidator, email, required} from '@shared/services/validation-service';
import {withFinalForm} from '@shared/HOC';
import {PrimaryButton} from '@shared/ui-kit';
import {nameOf} from '@shared/utility';
import {StyledForm, StyledFieldLabel, StyledBtnContainer, StyledForgotPwdLink} from './styles';

export interface ILoginFormValues {
  email: string;
  password: string;
}

interface IProps {
  onSubmit: (values: ILoginFormValues) => void;
  onForgotPassword: () => void;
}

const formValidator = createValidator<ILoginFormValues>({
  email: [required, email],
  password: [required],
});

const Cmp = ({handleSubmit, onForgotPassword}: IProps & FormRenderProps<ILoginFormValues>) => {
  const {submitting, submitError} = useFormState<ILoginFormValues>({
    subscription: {values: true, valid: true, pristine: true, submitError: true},
  });

  const {input: usernameInput, meta: usernameMeta} = useField(nameOf<ILoginFormValues>('email'));
  const {input: passwordInput, meta: passwordMeta} = useField(nameOf<ILoginFormValues>('password'));

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

export const SignInForm = memo(withFinalForm<IProps, ILoginFormValues>(Cmp, formValidator));
