import React, {useCallback, useEffect, useRef} from 'react';
import {Form, Field} from 'react-final-form';
import {createValidator, required} from 'core/services/ValidationService';
import {FormControl} from '@mui/material';
import {styled} from '@mui/material/styles';
import TextField from 'core/components/Form/TextField';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';

const StyledForm = styled('form')(({theme: {spacing}}) => ({
  maxWidth: 390,
  textAlign: 'center',
  padding: spacing(2, 0),
}));

const StyledOneRowContainer = styled(FormControl)(() => ({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

const StyledDivider = styled('div')(({theme: {spacing}}) => ({
  width: spacing(3),
}));

export interface IFormValues {
  name: string;
  phone: string;
  address: string;
  bottles: number;
}

const formValidator = createValidator<IFormValues>({
  name: [required],
  phone: [required],
  address: [required],
  bottles: [required],
});

const DeliverySectionForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, [nameRef]);

  const handleMakeOrder = useCallback(() => {}, []);

  return (
    <Form<IFormValues> validate={formValidator} onSubmit={handleMakeOrder}>
      {({handleSubmit, submitting, invalid}) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormControl fullWidth margin="none">
            <Field name="name" type="text">
              {({input, meta}) => (
                <TextField
                  ref={nameRef}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'enter your name' : ''}
                  placeholder="Your name"
                  aria-label="user name"
                  {...input}
                />
              )}
            </Field>
          </FormControl>

          <FormControl fullWidth margin="none">
            <Field name="address">
              {({input, meta}) => (
                <TextField
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'enter address' : ''}
                  placeholder="Address"
                  aria-label="address"
                  {...input}
                />
              )}
            </Field>
          </FormControl>

          <StyledOneRowContainer fullWidth margin="none">
            <Field name="phone">
              {({input, meta}) => (
                <TextField
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'enter phone' : ''}
                  placeholder="Phone"
                  aria-label="phone"
                  {...input}
                />
              )}
            </Field>
            <StyledDivider />
            <Field name="bottles">
              {({input, meta}) => (
                <TextField
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'count of bottles' : ''}
                  placeholder="Bottles"
                  aria-label="bottles"
                  {...input}
                />
              )}
            </Field>
          </StyledOneRowContainer>

          <PrimaryButton
            type="submit"
            title="Make order"
            buttonType="action"
            sx={{marginTop: 3}}
            disabled={submitting || invalid}
          />
        </StyledForm>
      )}
    </Form>
  );
};

export default DeliverySectionForm;
