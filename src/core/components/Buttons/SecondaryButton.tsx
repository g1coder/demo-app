import {memo} from 'react';
import {styled} from '@mui/material/styles';
import CircleButtonBase, {IProps as IStyledCircleButtonBaseProps} from 'core/components/Buttons/CircleButtonBase';

interface IProps extends IStyledCircleButtonBaseProps {}

const StyledSecondaryButton = styled(CircleButtonBase)<IProps>(({theme: {palette}, variant = 'regular'}) => ({
  backgroundColor: palette.primary.light,
  color: '#fff',
  '&:hover': {
    color: variant === 'regular' ? palette.primary.dark : '#fff',
    backgroundColor: variant === 'regular' ? '#fff' : palette.secondary.main,
  },
}));

const SecondaryButton = (props: IProps) => <StyledSecondaryButton {...props} />;

export default memo(SecondaryButton);
