import {Button, ButtonProps} from '@mui/material';
import {styled} from '@mui/material/styles';

export interface IProps extends ButtonProps {
  buttonType?: 'regular' | 'action';
}

const StyledCircleButtonBase = styled(Button)<IProps>(({theme: {spacing}, size, disabled}) => ({
  position: 'relative',
  cursor: disabled ? 'none' : 'pointer',
  width: size === 'small' ? 112 : 180,
  height: size === 'small' ? spacing(4) : spacing(6),
  borderRadius: spacing(4),
  transition: 'all .3s ease',
  boxShadow: '0 10px 30px rgb(17 44 145 / 30%)',
  opacity: disabled ? 0.5 : 1,
  fontSize: 14,
  textTransform: 'none',
  '& > a': {
    textDecoration: 'none',
  },
}));

const ButtonBase = ({title, ...rest}: IProps) => {
  return <StyledCircleButtonBase {...rest}>{title}</StyledCircleButtonBase>;
};

export default ButtonBase;
