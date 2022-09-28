import React from 'react';
import withFinalForm from 'core/HOC/withFinalForm';
import {createValidator, email, required} from 'core/services/ValidationService';
import {FormRenderProps, useField, useFormState} from 'react-final-form';
import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import Utils from 'core/services/Utils';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';

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
}));

export interface IFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

interface IProps {
  onSubmit: (value: IFormValues) => void;
}

const validator = createValidator<IFormValues>({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  password: [required],
});

const SignupForm = ({handleSubmit}: IProps & FormRenderProps<IFormValues>) => {
  const {submitting, submitErrors} = useFormState<IFormValues>({
    subscription: {values: true, valid: true, pristine: true, submitErrors: true},
  });

  const {input: firstNameInput, meta: firstNameMeta} = useField(Utils.nameOf<IFormValues>('firstName'));
  const {input: lastNameInput, meta: lastNameMeta} = useField(Utils.nameOf<IFormValues>('lastName'));
  const {input: emailInput, meta: emailMeta} = useField(Utils.nameOf<IFormValues>('email'));
  const {input: passwordInput, meta: passwordMeta} = useField(Utils.nameOf<IFormValues>('password'));

  const renderField = (input, meta, label) => (
    <FormControl fullWidth margin="dense">
      <StyledFieldLabel>
        <Typography variant="caption" fontWeight={600}>
          {label}
        </Typography>
      </StyledFieldLabel>
      <TextField
        {...input}
        margin="normal"
        error={meta.touched && !!meta.error}
        helperText={meta.touched && !!meta.error ? meta.error : ` `}
      />
    </FormControl>
  );

  return (
    <StyledForm onSubmit={handleSubmit}>
      {renderField(firstNameInput, firstNameMeta, 'First name')}
      {renderField(lastNameInput, lastNameMeta, 'Last name')}
      {renderField(emailInput, emailMeta, 'Email')}
      {renderField(passwordInput, passwordMeta, 'Password')}
      <FormHelperText error={!!submitErrors}>{!!submitErrors ? String(submitErrors) : ` `}</FormHelperText>
      <StyledBtnContainer>
        <PrimaryButton title="Sign up" disabled={submitting} type="submit" />
      </StyledBtnContainer>
    </StyledForm>
  );
};

export default withFinalForm<IProps, IFormValues>(SignupForm, validator);
