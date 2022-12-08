import {memo} from 'react';
import {styled} from '@mui/material/styles';
import CircleButtonBase, {IProps as IStyledCircleButtonBaseProps} from 'core/components/Buttons/CircleButtonBase';

interface IProps extends IStyledCircleButtonBaseProps {}

const StyledPrimaryButton = styled(CircleButtonBase, {shouldForwardProp: (prop) => prop !== 'buttonType'})<IProps>(
  ({theme: {palette}, buttonType = 'regular'}) => ({
    backgroundColor: palette.primary.dark,
    color: '#fff',
    '&:hover': {
      color: buttonType === 'regular' ? palette.primary.dark : '#fff',
      backgroundColor: buttonType === 'regular' ? '#fff' : palette.secondary.main,
    },
    '&[disabled]': {
      color: '#fff',
    },
  })
);

const PrimaryButton = (props: IProps) => <StyledPrimaryButton {...props} />;

export default memo(PrimaryButton);
