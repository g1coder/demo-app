import {observer} from 'mobx-react-lite';
import {useEffect} from 'react';
import CartStore from '@widgets/catalog/store/CartStore';
import HeaderDrawer from '@widgets/main-layout/ui/header/HeaderDrawer';
import HeaderLogin from '@widgets/main-layout/ui/header/HeaderLogin';
import HeaderLogo from '@widgets/main-layout/ui/header/HeaderLogo';
import HeaderNavigation from '@widgets/main-layout/ui/header/HeaderVavigation';
import {CartHeader} from '@entities/catalog';
import RouteConstants from '@shared/constants/route.constants';
import {StyledHeader, StyledLoginContainer, StyledNavContainer} from './styles';

const items = [
  {name: 'Home', url: RouteConstants.LANDING_PAGE.url},
  {name: 'Catalog', url: RouteConstants.CATALOG.url},
  {name: 'About us', url: RouteConstants.ABOUT.url},
  {name: 'Contacts', url: RouteConstants.CONTACTS.url},
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
