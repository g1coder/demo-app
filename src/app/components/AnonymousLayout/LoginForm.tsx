import React, {useEffect, useRef} from 'react';
import {Form, Field} from 'react-final-form';
import {createValidator, email, required} from 'core/services/ValidationService';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';
import {FormControl, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

const StyledForm = styled('form')(() => ({
  display: 'flex',
  flexDirection: 'column',
}));

const StyledFieldLabel = styled('div')(({theme}) => ({
  marginBottom: theme.spacing(-1.5),
  display: 'flex',
  justifyContent: 'space-between',
}));

const StyledForgotPwdLink = styled(Typography)(() => ({
  textDecoration: 'underline',
  cursor: 'pointer',
}));

const StyledBtnContainer = styled('div')(({theme}) => ({
  margin: 'auto',
  marginTop: theme.spacing(2),
}));

export interface IFormValues {
  username: string;
  password: string;
}

interface IProps {
  onLogin: (values: IFormValues) => void;
  onForgotPassword: () => void;
}

const formValidator = createValidator<IFormValues>({
  username: [required, email],
  password: [required],
});

const LoginForm = ({onLogin, onForgotPassword}: IProps) => {
  const usernameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    usernameRef.current?.focus();
  }, [usernameRef]);

  return (
    <Form<IFormValues> validate={formValidator} onSubmit={onLogin}>
      {({handleSubmit, submitting, invalid}) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormControl fullWidth margin="dense">
            <StyledFieldLabel>
              <Typography variant="caption" fontWeight={600}>
                Email address
              </Typography>
            </StyledFieldLabel>

            <Field name="username" type="text">
              {({input, meta}) => (
                <TextField
                  ref={usernameRef}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'Enter your email' : ''}
                  placeholder="user@gmail.com"
                  aria-label="user name"
                  {...input}
                />
              )}
            </Field>
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

            <Field name="password" type="password">
              {({input, meta}) => (
                <TextField
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'Enter password' : ''}
                  placeholder="123"
                  aria-label="password"
                  {...input}
                />
              )}
            </Field>
          </FormControl>
          <StyledBtnContainer>
            <PrimaryButton type="submit" disabled={submitting || invalid}>
              Sign in
            </PrimaryButton>
          </StyledBtnContainer>
        </StyledForm>
      )}
    </Form>
  );
};

export default LoginForm;
