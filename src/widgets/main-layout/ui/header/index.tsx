import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import CartStore from '@widgets/catalog/store/CartStore';
import HeaderDrawer from '@widgets/main-layout/ui/header/header-drawer';
import HeaderLogin from '@widgets/main-layout/ui/header/header-login';
import HeaderLogo from '@widgets/main-layout/ui/header/header-logo';
import HeaderNavigation from '@widgets/main-layout/ui/header/header-navigation';
import {CartHeader} from '@entities/catalog';
import AppRoutes from '@shared/constants/AppRoutes';
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
