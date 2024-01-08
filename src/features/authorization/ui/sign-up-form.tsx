import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {FormRenderProps, useField, useFormState} from 'react-final-form';
import {createValidator, email, required} from '@shared/services/validation-service';
import {nameOf} from '@shared/utility';
import {withFinalForm} from '@shared/HOC';
import {PrimaryButton} from '@shared/ui-kit';
import {StyledForm, StyledFieldLabel, StyledBtnContainer} from './styles';

export interface ISignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  token: string;
}

interface IProps {
  onSubmit: (value: ISignUpFormValues) => void;
}

const validator = createValidator<ISignUpFormValues>({
  firstName: [required],
  lastName: [required],
  email: [required, email],
  password: [required],
});

const Cmp = ({handleSubmit}: IProps & FormRenderProps<ISignUpFormValues>) => {
  const {submitting, submitErrors} = useFormState<ISignUpFormValues>({
    subscription: {values: true, valid: true, pristine: true, submitErrors: true},
  });

  const {input: firstNameInput, meta: firstNameMeta} = useField(nameOf<ISignUpFormValues>('firstName'));
  const {input: lastNameInput, meta: lastNameMeta} = useField(nameOf<ISignUpFormValues>('lastName'));
  const {input: emailInput, meta: emailMeta} = useField(nameOf<ISignUpFormValues>('email'));
  const {input: passwordInput, meta: passwordMeta} = useField(nameOf<ISignUpFormValues>('password'));

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
      <FormHelperText error={!!submitErrors}>{submitErrors ? String(submitErrors) : ` `}</FormHelperText>
      <StyledBtnContainer>
        <PrimaryButton title="Sign up" disabled={submitting} type="submit" />
      </StyledBtnContainer>
    </StyledForm>
  );
};

export const SignUpForm = withFinalForm<IProps, ISignUpFormValues>(Cmp, validator);
