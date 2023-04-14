import {memo} from 'react';
import {styled} from '@mui/material/styles';
import {Box, Typography} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import Spinner from '@shared/ui/Spinner';

const borderRadius = 32;

const StyledContainer = styled(Box)(({theme: {spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  position: 'relative',
  width: 180,
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

  flexBasis: 50,
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
  add: () => void;
  remove: () => void;
  loading: boolean;
}

const OrderButton = ({value, add, remove, loading}: IProps) => {
  return (
    <StyledContainer>
      <StyledIconContainer type="decrement" onClick={remove}>
        <RemoveOutlinedIcon />
      </StyledIconContainer>
      <Typography variant="h4" color="primary.light" sx={{userSelect: 'none'}}>
        {loading ? <Spinner /> : value}
      </Typography>
      <StyledIconContainer type="increment" onClick={add}>
        <AddIcon />
      </StyledIconContainer>
    </StyledContainer>
  );
};

export default memo(OrderButton);
