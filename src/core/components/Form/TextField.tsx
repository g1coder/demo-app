import _ from 'lodash';
import React, {ForwardedRef, forwardRef, memo} from 'react';
import {styled} from '@mui/material/styles';
import {TextFieldProps} from '@mui/material/TextField/TextField';
import {TextField as MuiTextField} from '@mui/material';

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

const TextField = forwardRef((props: TextFieldProps, ref: ForwardedRef<HTMLDivElement>) => {
  const InputProps = _.merge({sx: {borderRadius: 32, padding: '6px 10px', color: 'primary.dark'}}, props.InputProps);
  return <StyledTextField {...props} InputProps={InputProps} variant="outlined" ref={ref} />;
});

export default memo(TextField);
