import {ElementType, memo, ReactNode} from 'react';
import {styled} from '@mui/material/styles';
import {ButtonBase, ButtonBaseProps, Typography} from '@mui/material';

interface IProps extends ButtonBaseProps {
  title: string;
  size?: 'regular' | 'small';
  variant?: 'primary' | 'secondary' | 'action';
  disabled?: boolean;
  component?: ElementType;
  href?: string;
  startIcon?: ReactNode;
}

const StyledCircleButton = styled(ButtonBase)<IProps>(({theme: {spacing, palette}, size, variant, disabled}) => ({
  position: 'relative',
  cursor: disabled ? 'none' : 'pointer',
  maxWidth: size === 'small' ? 112 : 180,
  width: '100%',
  height: size === 'small' ? spacing(4) : spacing(6),
  borderRadius: spacing(4),
  backgroundColor: variant === 'secondary' ? palette.primary.light : palette.primary.dark,
  color: '#fff',
  transition: 'all .3s ease',
  boxShadow: '0 10px 30px rgb(17 44 145 / 30%)',
  opacity: disabled ? 0.5 : 1,

  '& > a': {
    textDecoration: 'none',
  },
  '&:hover': {
    color: variant === 'action' ? '#fff' : palette.primary.dark,
    backgroundColor: variant === 'action' ? palette.secondary.main : '#fff',
    '& > a:hover': {
      color: variant === 'action' ? '#fff' : palette.primary.dark,
    },
  },
}));

const CircleButton = ({component, href, startIcon, ...rest}: IProps) => {
  return (
    <StyledCircleButton {...rest}>
      {startIcon}
      <Typography component={component || 'p'} variant={rest.size === 'small' ? 'caption' : 'body2'} href={href}>
        {rest.title}
      </Typography>
    </StyledCircleButton>
  );
};

export default memo(CircleButton);
