import {Login} from 'widgets';
import {StyledContainer, StyledInnerContainer, StyledImageDecorator} from './styles';

const LoginPage = () => {
  return (
    <StyledContainer>
      <StyledInnerContainer>
        <Login />
      </StyledInnerContainer>
      <StyledImageDecorator />
    </StyledContainer>
  );
};

export default LoginPage;
