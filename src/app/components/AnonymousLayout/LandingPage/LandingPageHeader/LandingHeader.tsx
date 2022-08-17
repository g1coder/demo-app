import React, {useReducer} from 'react';
import AppRoutes from 'core/constants/AppRoutes';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledCart,
  StyledDrawer,
  StyledHeader,
  StyledIconContainer,
  StyledLogoContainer,
  StyledNav,
  StyledActionContainer,
} from './LandingHeaderStyles';
import AppLogo from 'app/components/AnonymousLayout/LandingPage/header-logo.png';

export interface IHeaderItem {
  name: string;
  url: string;
}

const items: IHeaderItem[] = [
  {name: 'Home', url: '/'},
  {name: 'Catalog', url: '#'},
  {name: 'Delivery', url: '#'},
  {name: 'About us', url: '#'},
  {name: 'Contacts', url: '#'},
];

const LandingHeader = () => {
  const [isDrawerOpen, toggleDrawer] = useReducer((state) => !state, false);

  return (
    <StyledHeader>
      <StyledLogoContainer>
        <a href={AppRoutes.LANDING_PAGE.path}>
          <img src={AppLogo} alt="company-logo" />
        </a>
      </StyledLogoContainer>

      <StyledActionContainer>
        <StyledNav items={items} />
        <StyledIconContainer>
          <StyledCart count={2} />
          <MenuIcon onClick={toggleDrawer} />
        </StyledIconContainer>
      </StyledActionContainer>

      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} items={items} />
    </StyledHeader>
  );
};

export default LandingHeader;
