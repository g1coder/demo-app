import {Typography} from '@mui/material';
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';

export const StyledFormContainer = styled(Paper)(({theme: {spacing}}) => ({
  position: 'relative',
  padding: spacing(5, 8),
  borderRadius: spacing(3),
  margin: '64px auto',
  textAlign: 'center',
  boxShadow: '0 30px 30px rgb(0 0 0 / 25%)',
}));

export const DeliveryOrder = () => {
  return (
    <StyledFormContainer>
      <Typography variant="h5" color="primary.light" fontWeight={600}>
        Please, fill delivery form
      </Typography>
    </StyledFormContainer>
  );
};
