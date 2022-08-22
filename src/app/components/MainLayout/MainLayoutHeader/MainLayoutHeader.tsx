import React, {useCallback, useReducer} from 'react';
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
} from 'app/components/MainLayout/MainLayoutHeader/MainLayoutHeaderStyles';
import AppLogo from 'app/components/LandingPage/presets/header-logo.png';
import CartStore from 'store/CartStore';
import {useNavigate} from 'react-router-dom';

export interface IHeaderItem {
  name: string;
  url: string;
}

const items: IHeaderItem[] = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.url},
  {name: 'Catalog', url: AppRoutes.SHOP.url},
  {name: 'Delivery', url: '#'},
  {name: 'About us', url: '#'},
  {name: 'Contacts', url: '#'},
];

const MainLayoutHeader = observer(() => {
  const [isDrawerOpen, toggleDrawer] = useReducer((state) => !state, false);
  const navigate = useNavigate();

  const handleCartClick = useCallback(() => {
    navigate(AppRoutes.CART.url);
  }, [navigate]);

  return (
    <StyledHeader>
      <StyledLogoContainer>
        <a href={AppRoutes.LANDING_PAGE.url}>
          <img src={AppLogo} alt="company-logo" />
        </a>
      </StyledLogoContainer>
      <StyledActionContainer>
        <StyledInnerContainer>
          <StyledNavigationMenu items={items} />
          <StyledAuthDrawerContainer />
        </StyledInnerContainer>
        <StyledIconContainer>
          <StyledCart count={CartStore.count} onClick={handleCartClick} />
          <MenuIcon onClick={toggleDrawer} />
        </StyledIconContainer>
      </StyledActionContainer>
      <StyledDrawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer} items={items} />
    </StyledHeader>
  );
});

export default MainLayoutHeader;
