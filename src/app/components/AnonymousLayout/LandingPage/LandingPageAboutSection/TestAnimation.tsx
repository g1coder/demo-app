import {styled} from '@mui/material/styles';

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  height: 450,
}));

const StyledCircle = styled('div')(() => ({
  height: 100,
  width: 100,
  borderStyle: 'solid',
  borderWidth: 5,
  borderRadius: '50%',
  borderColor: 'black',
  animationName: 'myEffect',
  animationDuration: '8s',
  animationIterationCount: 'infinite',
  '@keyframes myEffect': {
    '0%': {height: 100, width: 100},
    '30%': {height: 400, width: 400, opacity: 1},
    '40%': {height: 405, width: 405, opacity: 0.3},
    '100%': {height: 100, width: 100, opacity: 0.6},
  },
}));

const TestAnimation = () => {
  return (
    <StyledContainer>
      <StyledCircle />
    </StyledContainer>
  );
};

export default TestAnimation;
