import {Outlet} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
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
