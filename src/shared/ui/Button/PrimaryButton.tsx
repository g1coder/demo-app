import {styled} from '@mui/material/styles';
import {memo} from 'react';
import ButtonBase, {IProps as IStyledCircleButtonBaseProps} from './ButtonBase';

type IProps = IStyledCircleButtonBaseProps

const StyledPrimaryButton = styled(ButtonBase, {shouldForwardProp: (prop) => prop !== 'buttonType'})<IProps>(
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
