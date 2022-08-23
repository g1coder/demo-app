import React, {memo} from 'react';
import {Box, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import {styled} from '@mui/material/styles';

const borderRadius = 32;

const StyledContainer = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 150,
  height: spacing(6),
  borderRadius: spacing(4),
  color: '#fff',
  transition: 'all .3s ease',
  boxShadow: '0 10px 30px rgb(17 44 145 / 30%)',
  cursor: 'default',
}));

const StyledIconContainer = styled('div')<{type: 'increment' | 'decrement'}>(({theme: {palette}, type}) => ({
  backgroundColor: palette.primary.light,
  height: '100%',
  borderTopLeftRadius: type === 'decrement' ? borderRadius : 0,
  borderBottomLeftRadius: type === 'decrement' ? borderRadius : 0,

  borderTopRightRadius: type === 'increment' ? borderRadius : 0,
  borderBottomRightRadius: type === 'increment' ? borderRadius : 0,

  flexBasis: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',

  transition: 'all .5s ease',
  '&:hover': {
    backgroundColor: palette.secondary.main,
  },
}));

interface IProps {
  value: number | undefined;
  onChange: (value: number) => void;
}

const OrderButton = ({value, onChange}: IProps) => {
  // const [value, setValue] = useState<number>(props.value);

  // const onIncrement = useCallback(() => {
  //   // setValue((currentValue) => (currentValue || 0) + 1);
  //   onChange(value + 1)
  // }, [onChange, value]);
  //
  // const onDecrement = useCallback(() => {
  //   // setValue((currentValue) => {
  //   //   return currentValue ? currentValue - 1 : currentValue;
  //   // });
  // }, [onChange, value]);

  const onIncrement = () => onChange((value || 0) + 1);
  const onDecrement = () => onChange(value ? value - 1 : 0);

  return (
    <StyledContainer>
      <StyledIconContainer type="decrement" onClick={onDecrement}>
        <RemoveOutlinedIcon />
      </StyledIconContainer>
      <Typography variant="body2" color="primary.light">
        {value}
      </Typography>
      <StyledIconContainer type="increment" onClick={onIncrement}>
        <AddIcon />
      </StyledIconContainer>
    </StyledContainer>
  );
};

export default memo(OrderButton);
