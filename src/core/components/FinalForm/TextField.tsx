import _ from 'lodash';
import React, {ForwardedRef, forwardRef, memo} from 'react';
import {styled} from '@mui/material/styles';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {TextField as MuiTextField} from '@mui/material';
import {useField} from 'react-final-form';

const StyledTextField = styled(MuiTextField)(({theme: {palette}}) => ({
  '& .MuiOutlinedInput-root': {
    fontSize: 14,
    fontWeight: 100,
    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
      borderColor: palette.primary.light,
      borderWidth: 1,
    },
  },
}));

interface IProps {
  name?: string;
  error?: boolean;
  helperText?: string;
}

const TextField = forwardRef((props: TextFieldProps & IProps, ref: ForwardedRef<HTMLDivElement>) => {
  const {input, meta} = useField<string>(props.name || '');
  const hasError = props.error || (meta.touched && !!meta.error);
  const helperText = hasError ? props.helperText || meta.error : ` `;

  const InputProps = _.merge({sx: {borderRadius: 32, padding: '6px 10px', color: 'primary.dark'}}, props.InputProps);
  return (
    <StyledTextField
      {...input}
      {...props}
      InputProps={InputProps}
      variant="outlined"
      ref={ref}
      error={hasError}
      helperText={helperText}
    />
  );
});

export default memo(TextField);
