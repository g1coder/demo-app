import React, {useEffect, useRef} from 'react';
import {Form, Field} from 'react-final-form';
import {createValidator, required} from 'core/services/ValidationService';
import {FormControl} from '@mui/material';
import {styled} from '@mui/material/styles';
import TextField from 'core/components/Form/TextField';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';
import Utils from 'core/services/Utils';

const StyledForm = styled('form')(({theme: {spacing}}) => ({
  maxWidth: 390,
  textAlign: 'center',
  padding: spacing(2, 0),
}));

const StyledOneRowContainer = styled(FormControl)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
});

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

interface IProps {
  onSubmit: (value: IFormValues) => void;
}

const DeliverySectionForm = ({onSubmit}: IProps) => {
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameRef.current?.focus();
  }, [nameRef]);

  return (
    <Form<IFormValues> validate={formValidator} onSubmit={onSubmit}>
      {({handleSubmit, submitting}) => (
        <StyledForm onSubmit={handleSubmit}>
          <FormControl fullWidth margin="none">
            <Field name={Utils.nameOf<IFormValues>('name')} type="text">
              {({input, meta}) => (
                <TextField
                  {...input}
                  ref={nameRef}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'Enter your name' : ''}
                  placeholder="Your name"
                  aria-label="user name"
                />
              )}
            </Field>
          </FormControl>

          <FormControl fullWidth margin="none">
            <Field name={Utils.nameOf<IFormValues>('address')}>
              {({input, meta}) => (
                <TextField
                  {...input}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'Enter address' : ''}
                  placeholder="Address"
                  aria-label="address"
                />
              )}
            </Field>
          </FormControl>

          <StyledOneRowContainer fullWidth margin="none">
            <Field name={Utils.nameOf<IFormValues>('phone')}>
              {({input, meta}) => (
                <TextField
                  {...input}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'Enter phone' : ''}
                  placeholder="Phone"
                  aria-label="phone"
                />
              )}
            </Field>
            <StyledDivider />
            <Field name={Utils.nameOf<IFormValues>('bottles')}>
              {({input, meta}) => (
                <TextField
                  {...input}
                  margin="normal"
                  error={meta.touched && !!meta.error}
                  helperText={meta.touched && !!meta.error ? 'enter count of bottles' : ''}
                  placeholder="Bottles"
                  aria-label="bottles"
                  type="number"
                />
              )}
            </Field>
          </StyledOneRowContainer>

          <PrimaryButton
            type="submit"
            title="Make order"
            buttonType="action"
            sx={{marginTop: 3}}
            disabled={submitting}
          />
        </StyledForm>
      )}
    </Form>
  );
};

export default DeliverySectionForm;
