import {useEffect} from 'react';
import {observer} from 'mobx-react-lite';
import AppRoutes from 'shared/constants/AppRoutes';
import CartStore from 'widgets/catalog/store/CartStore';
import {CartHeader} from 'entities/cart';
import HeaderLogin from 'widgets/main-layout/ui/header/header-login';
import HeaderNavigation from 'widgets/main-layout/ui/header/header-navigation';
import HeaderLogo from 'widgets/main-layout/ui/header/header-logo';
import HeaderDrawer from 'widgets/main-layout/ui/header/header-drawer';
import {StyledHeader, StyledLoginContainer, StyledNavContainer} from './styles';

const items = [
  {name: 'Home', url: AppRoutes.LANDING_PAGE.url},
  {name: 'Catalog', url: AppRoutes.CATALOG.url},
  {name: 'About us', url: AppRoutes.ABOUT.url},
  {name: 'Contacts', url: AppRoutes.CONTACTS.url},
];

const Header = observer(() => {
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
      <CartHeader count={CartStore.count} />
    </StyledHeader>
  );
});

export default Header;
