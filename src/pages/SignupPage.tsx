import {SignUp} from 'widgets';
import {StyledContainer, StyledInnerContainer, StyledImageDecorator} from './styles';
const SignupPage = () => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <SignUp />
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default SignupPage;
