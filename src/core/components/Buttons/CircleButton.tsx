import {memo} from 'react';
import {styled} from '@mui/material/styles';
import {ButtonBase, ButtonBaseProps, Typography} from '@mui/material';

interface IProps extends ButtonBaseProps {
  title: string;
  size?: 'regular' | 'small';
  variant?: 'primary' | 'secondary';
  disabled?: boolean;
}

const StyledCircleButton = styled(ButtonBase)<IProps>(({theme: {spacing, palette}, size, variant, disabled}) => ({
  position: 'relative',
  cursor: disabled ? 'none' : 'pointer',
  maxWidth: size === 'small' ? 112 : 180,
  width: '100%',
  height: spacing(6),
  borderRadius: spacing(4),
  backgroundColor: variant === 'secondary' ? palette.primary.light : palette.primary.dark,
  color: '#fff',
  transition: 'all .3s ease',

  '&:hover': {
    color: palette.primary.dark,
    backgroundColor: '#fff',
  },
}));

const CircleButton = (props: IProps) => {
  return (
    <StyledCircleButton {...props}>
      <Typography component="a" variant="body2">
        {props.title}
      </Typography>
    </StyledCircleButton>
  );
};

export default memo(CircleButton);
