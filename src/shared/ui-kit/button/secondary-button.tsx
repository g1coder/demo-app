import {styled} from '@mui/material/styles';
import ButtonBase, {IProps as IStyledCircleButtonBaseProps} from './button-base';

type IProps = IStyledCircleButtonBaseProps;

const StyledSecondaryButton = styled(ButtonBase)<IProps>(({theme: {palette}, variant = 'regular'}) => ({
  backgroundColor: palette.primary.light,
  color: '#fff',
  '&:hover': {
    color: variant === 'regular' ? palette.primary.dark : '#fff',
    backgroundColor: variant === 'regular' ? '#fff' : palette.secondary.main,
  },
}));

export const SecondaryButton = (props: IProps) => <StyledSecondaryButton {...props} />;
