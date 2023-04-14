import {Outlet} from 'react-router-dom';
import Footer from './footer';
import Header from './header';
import {StyledContainer, StyledContentContainer} from './styles';


const MainLayout = () => {
  return (
    <StyledContainer component="main">
      <Header />
      <StyledContentContainer>
        <Outlet />
      </StyledContentContainer>
      <Footer />
    </StyledContainer>
  );
};

export default MainLayout;
