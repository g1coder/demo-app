import SignUp from 'widgets/sign-up';
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
