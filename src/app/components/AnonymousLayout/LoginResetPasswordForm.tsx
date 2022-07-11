import React from 'react';
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

const StyledBtnContainer = styled('div')(({theme}) => ({
  margin: 'auto',
  marginTop: theme.spacing(2),
  textAlign: 'center',
}));

const StyledBackButton = styled(Typography)(({theme}) => ({
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

export interface IFormValues {
  email: string;
}

interface IProps {
  onReset: (values: IFormValues) => Promise<void>;
  onBack: () => void;
}

const formValidator = createValidator<IFormValues>({
  email: [required, email],
});

const LoginResetPasswordForm = ({onReset, onBack}: IProps) => (
  <Form<IFormValues> validate={formValidator} onSubmit={onReset}>
    {({handleSubmit, submitting, invalid}) => (
      <StyledForm onSubmit={handleSubmit}>
        <FormControl fullWidth margin="dense">
          <StyledFieldLabel>
            <Typography variant="caption" fontWeight={600}>
              Email address
            </Typography>
          </StyledFieldLabel>

          <Field name="email" type="text">
            {({input, meta}) => (
              <TextField
                margin="normal"
                error={meta.touched && !!meta.error}
                helperText={meta.touched && !!meta.error ? meta.error : ''}
                {...input}
              />
            )}
          </Field>
        </FormControl>
        <StyledBtnContainer>
          <PrimaryButton type="submit" disabled={submitting || invalid}>
            Reset password
          </PrimaryButton>
          <StyledBackButton variant="subtitle2" onClick={onBack}>
            Back
          </StyledBackButton>
        </StyledBtnContainer>
      </StyledForm>
    )}
  </Form>
);

export default LoginResetPasswordForm;
