import {memo} from 'react';
import withFinalForm from 'core/HOC/withFinalForm';
import {createValidator, email, required} from 'core/services/ValidationService';
import {FormRenderProps, useFormState, Field} from 'react-final-form';
import {Card, CardActions, CardContent, FormControl, TextField, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';
import Utils from 'core/services/Utils';
import {TextFieldProps} from '@mui/material/TextField/TextField';

const StyledFieldLabel = styled('div')({
  marginBottom: -12,
  display: 'flex',
  justifyContent: 'space-between',
});

interface IProps {
  onSubmit: (values: IFormValues) => void;
}

interface IFormValues {
  name: string | undefined;
  email: string | undefined;
  message: string | undefined;
}

const formValidator = createValidator<IFormValues>({
  name: [required],
  email: [required, email],
  message: [required, (value: string | undefined) => (value && value.length < 255 ? undefined : 'Max 255 symbols')],
});

const FeedbackForm = ({handleSubmit, submitting}: IProps & FormRenderProps<IFormValues>) => {
  useFormState({
    subscription: {pristine: true, touched: true, valid: true, values: true},
  });

  const renderFormControl = (label: string, property: string, textFieldProps?: TextFieldProps) => (
    <FormControl fullWidth margin="dense">
      <StyledFieldLabel>
        <Typography variant="caption" fontWeight={600}>
          {label}
        </Typography>
      </StyledFieldLabel>
      <Field name={property}>
        {({input, meta}) => (
          <TextField
            {...input}
            {...textFieldProps}
            margin="normal"
            error={(meta.modified || meta.touched) && !!meta.error}
            helperText={(meta.modified || meta.touched) && !!meta.error ? meta.error : ` `}
          />
        )}
      </Field>
    </FormControl>
  );

  return (
    <form onSubmit={handleSubmit}>
      <Card sx={{padding: 2}} elevation={3}>
        <CardContent>
          {renderFormControl('Your name', Utils.nameOf<IFormValues>('name'))}
          {renderFormControl('Your email', Utils.nameOf<IFormValues>('email'))}
          {renderFormControl('Message', Utils.nameOf<IFormValues>('message'), {maxRows: 4, multiline: true})}
        </CardContent>
        <CardActions>
          <PrimaryButton title="Submit" disabled={submitting} type="submit" sx={{margin: 'auto'}} />
        </CardActions>
      </Card>
    </form>
  );
};

export default memo(withFinalForm<IProps, IFormValues>(FeedbackForm, formValidator));
