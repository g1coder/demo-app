import React, {useReducer} from 'react';
import AppRoutes from 'core/constants/AppRoutes';
import MenuIcon from '@mui/icons-material/Menu';
import {StyledDrawer, StyledHeader, StyledIconContainer, StyledLogoContainer} from './LandingHeaderStyles';
import logo from './header-logo.png';

const LandingHeader = () => {
  const [isDrawerOpen, toggleDrawer] = useReducer((state) => !state, false);

  return (
    <StyledHeader>
      <StyledLogoContainer>
        <a href={AppRoutes.LANDING_PAGE.path}>
          <img src={logo} alt="header-logo" />
        </a>
      </StyledLogoContainer>
      <StyledIconContainer onClick={toggleDrawer}>
        <MenuIcon fontSize="large" />
      </StyledIconContainer>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer}>
        menu
      </StyledDrawer>
    </StyledHeader>
  );
};

export default LandingHeader;
