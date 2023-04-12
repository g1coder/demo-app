import {memo} from 'react';
import {FormRenderProps, useFormState, useField} from 'react-final-form';
import {FormControl, FormHelperText, TextField, Typography} from '@mui/material';
import {createValidator, email, required} from 'shared/core/services/ValidationService';
import PrimaryButton from 'shared/ui/Button/PrimaryButton';
import withFinalForm from 'shared/lib/HOC/withFinalForm';
import Utils from 'shared/core/services/Utils';
import {StyledForm, StyledFieldLabel, StyledBtnContainer, StyledBackButton} from './styles'

export interface IFormValues {
  email: string;
}

interface IProps {
  onSubmit: (values: IFormValues) => void;
  onBack: () => void;
}

const formValidator = createValidator<IFormValues>({
  email: [required, email],
});

const ResetPasswordForm = ({handleSubmit, onBack}: IProps & FormRenderProps<IFormValues>) => {
  const {submitting, submitSucceeded, submitErrors} = useFormState<IFormValues>({
    subscription: {pristine: true, submitSucceeded: true, submitErrors: true},
  });

  const {input, meta} = useField(Utils.nameOf<IFormValues>('email'));

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Typography variant="caption" sx={{textAlign: 'center', marginTop: 3, marginBottom: 5}}>
        We will send you an email to reset your password.
      </Typography>

      <FormControl fullWidth margin="dense">
        <StyledFieldLabel>
          <Typography variant="caption" fontWeight={600}>
            Email address
          </Typography>
        </StyledFieldLabel>
        <TextField
          {...input}
          margin="normal"
          error={meta.touched && !!meta.error}
          helperText={meta.touched && !!meta.error ? meta.error : ` `}
          aria-label="email for reset"
        />
      </FormControl>
      <FormHelperText error={!!submitErrors}>{!!submitErrors ? String(submitErrors) : ` `}</FormHelperText>
      <FormHelperText sx={{color: (theme) => theme.palette.primary.light}}>
        {submitSucceeded ? 'We sent a message on your email' : ` `}
      </FormHelperText>
      <StyledBtnContainer>
        <PrimaryButton title="Reset password" type="submit" disabled={submitting} />
        <StyledBackButton variant="subtitle2" onClick={onBack}>
          Back
        </StyledBackButton>
      </StyledBtnContainer>
    </StyledForm>
  );
};

export default memo(withFinalForm<IProps, IFormValues>(ResetPasswordForm, formValidator));