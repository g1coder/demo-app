import {styled} from '@mui/material/styles';
import {memo} from 'react';
import ButtonBase, {IProps as IStyledCircleButtonBaseProps} from './ButtonBase';

type IProps = IStyledCircleButtonBaseProps

const StyledSecondaryButton = styled(ButtonBase)<IProps>(({theme: {palette}, variant = 'regular'}) => ({
  backgroundColor: palette.primary.light,
  color: '#fff',
  '&:hover': {
    color: variant === 'regular' ? palette.primary.dark : '#fff',
    backgroundColor: variant === 'regular' ? '#fff' : palette.secondary.main,
  },
}));

const SecondaryButton = (props: IProps) => <StyledSecondaryButton {...props} />;

export default memo(SecondaryButton);
