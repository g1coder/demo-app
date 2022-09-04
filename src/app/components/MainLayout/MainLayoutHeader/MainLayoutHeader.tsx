import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import AppRoutes from 'core/constants/AppRoutes';
import {
  StyledHeader,
  StyledLoginContainer,
  StyledNavContainer,
} from 'app/components/MainLayout/MainLayoutHeader/MainLayoutHeaderStyles';
import CartStore from 'store/CartStore';
import HeaderCart from 'app/components/MainLayout/MainLayoutHeader/HeaderCart';
import HeaderLogin from 'app/components/MainLayout/MainLayoutHeader/HeaderLogin';
import HeaderNavigation from 'app/components/MainLayout/MainLayoutHeader/HeaderNavigation';
import HeaderLogo from 'app/components/MainLayout/MainLayoutHeader/HeaderLogo';
import HeaderDrawer from 'app/components/MainLayout/MainLayoutHeader/HeaderDrawer';

const items = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.url},
  {name: 'Catalog', url: AppRoutes.CATALOG.url},
  {name: 'Delivery', url: '#'},
  {name: 'About us', url: '#'},
  {name: 'Contacts', url: '#'},
];

const MainLayoutHeader = observer(() => {
  useEffect(() => {
    CartStore.refreshCart();
  }, []);

  return (
    <StyledHeader>
      <HeaderDrawer items={items} />
      <HeaderLogo />
      <StyledNavContainer>
        <HeaderNavigation items={items} />
      </StyledNavContainer>

      <StyledLoginContainer>
        <HeaderLogin />
      </StyledLoginContainer>
      <HeaderCart count={CartStore.count} />
    </StyledHeader>
  );
});

export default MainLayoutHeader;
