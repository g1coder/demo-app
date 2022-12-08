import React, {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import AppRoutes from 'app/router/AppRoutes';
import {
  StyledHeader,
  StyledLoginContainer,
  StyledNavContainer,
} from 'app/pages/MainLayout/MainLayoutHeader/MainLayoutHeaderStyles';
import CartStore from 'features/catalog/store/CartStore';
import HeaderCart from 'app/pages/MainLayout/MainLayoutHeader/HeaderCart';
import HeaderLogin from 'app/pages/MainLayout/MainLayoutHeader/HeaderLogin';
import HeaderNavigation from 'app/pages/MainLayout/MainLayoutHeader/HeaderNavigation';
import HeaderLogo from 'app/pages/MainLayout/MainLayoutHeader/HeaderLogo';
import HeaderDrawer from 'app/pages/MainLayout/MainLayoutHeader/HeaderDrawer';

const items = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.url},
  {name: 'Catalog', url: AppRoutes.CATALOG.url},
  {name: 'Delivery', url: '#'},
  {name: 'About us', url: AppRoutes.ABOUT.url},
  {name: 'Contacts', url: AppRoutes.CONTACTS.url},
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
