import {SignIn} from '@widgets/auth';
import {StyledContainer, StyledInnerContainer, StyledImageDecorator} from '../styles';

const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <SignIn />
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default LoginPage;
