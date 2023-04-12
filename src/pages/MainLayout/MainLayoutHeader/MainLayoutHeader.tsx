import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import AppRoutes from 'app/router/AppRoutes';
import {
  StyledHeader,
  StyledLoginContainer,
  StyledNavContainer,
} from 'pages/MainLayout/MainLayoutHeader/MainLayoutHeaderStyles';
import CartStore from 'features/catalog/store/CartStore';
import HeaderCart from 'pages/MainLayout/MainLayoutHeader/HeaderCart';
import HeaderLogin from 'pages/MainLayout/MainLayoutHeader/HeaderLogin';
import HeaderNavigation from 'pages/MainLayout/MainLayoutHeader/HeaderNavigation';
import HeaderLogo from 'pages/MainLayout/MainLayoutHeader/HeaderLogo';
import HeaderDrawer from 'pages/MainLayout/MainLayoutHeader/HeaderDrawer';

const items = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.url},
  {name: 'Catalog', url: AppRoutes.CATALOG.url},
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
