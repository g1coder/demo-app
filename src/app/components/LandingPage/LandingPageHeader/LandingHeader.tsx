import React, {useReducer} from 'react';
import {observer} from 'mobx-react-lite';
import AppRoutes from 'core/constants/AppRoutes';
import MenuIcon from '@mui/icons-material/Menu';
import {
  StyledCart,
  StyledDrawer,
  StyledHeader,
  StyledIconContainer,
  StyledLogoContainer,
  StyledActionContainer,
  StyledAuthDrawerContainer,
  StyledInnerContainer,
  StyledNavigationMenu,
} from './LandingHeaderStyles';
import AppLogo from 'app/components/LandingPage/presets/header-logo.png';
import CartStore from 'store/CartStore';

export interface IHeaderItem {
  name: string;
  url: string;
}

const items: IHeaderItem[] = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.path},
  {name: 'Catalog', url: AppRoutes.SHOP.path},
  {name: 'Delivery', url: '#'},
  {name: 'About us', url: '#'},
  {name: 'Contacts', url: '#'},
];

const LandingHeader = observer(() => {
  const [isDrawerOpen, toggleDrawer] = useReducer((state) => !state, false);

  return (
    <StyledHeader>
      <StyledLogoContainer>
        <a href={AppRoutes.LANDING_PAGE.path}>
          <img src={AppLogo} alt="company-logo" />
        </a>
      </StyledLogoContainer>

      <StyledActionContainer>
        <StyledInnerContainer>
          <StyledNavigationMenu items={items} />
          <StyledAuthDrawerContainer />
        </StyledInnerContainer>
        <StyledIconContainer>
          <StyledCart count={CartStore.count} />
          <MenuIcon onClick={toggleDrawer} />
        </StyledIconContainer>
      </StyledActionContainer>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} items={items} />
    </StyledHeader>
  );
});

export default LandingHeader;
