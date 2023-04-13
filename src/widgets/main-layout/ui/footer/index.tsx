import AppRoutes from 'shared/constants/AppRoutes';
import AppLogo from 'pages/LandingPage/presets/header-logo.png';
import {Typography} from '@mui/material';
import {StyledWrapper} from '../styles';
import {StyledContainer, StyledAboutContainer, StyledButtonContainer, StyledAboutInfoContainer} from './styles';

const Footer = () => {
  return (
    <StyledContainer>
      <StyledWrapper>
        <StyledAboutContainer>
          <a href={AppRoutes.LANDING_PAGE.url}>
            <img src={AppLogo} alt="company-logo" />
          </a>
          <Typography variant="body2" sx={{fontStyle: 'italic', margin: '32px 0'}}>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Vivamus
            tristique ligula quis orci malesuada tincidunt.
          </Typography>
          <StyledButtonContainer />
        </StyledAboutContainer>
      </StyledWrapper>
      <StyledAboutInfoContainer>
        <Typography variant="body2" component="a" href="https://github.com/g1coder" target="_blank">
          vsl
        </Typography>
        <Typography variant="body2" fontFamily={'sans-serif'}>
          © All Rights Reserved - 2022
        </Typography>
      </StyledAboutInfoContainer>
    </StyledContainer>
  );
};

export default Footer;
