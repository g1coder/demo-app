import {ReactElement} from 'react';
import {Button, ButtonProps} from '@mui/material';
import {OverridableStringUnion} from '@mui/types';
import {ButtonPropsColorOverrides} from '@mui/material/Button/Button';

interface IProps extends ButtonProps {
  color?: OverridableStringUnion<
    'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
    ButtonPropsColorOverrides
  >;
  disabled?: boolean;
  component?: ReactElement;
  onClick?: (...args: any[]) => any;
  type?: 'button' | 'submit' | 'reset' | undefined;
  to?: string;
}

const PrimaryButton = (props: IProps) => {
  const color = props.color || 'primary';
  return <Button {...props} color={color} variant="contained"  />;
};

export default PrimaryButton;
