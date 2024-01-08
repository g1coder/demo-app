import {CartHeader} from '@entities/cart';
import {Routes} from '@shared/constants';
import {HeaderDrawer} from './header-drawer';
import {HeaderLogin} from './header-login';
import {HeaderLogo} from './header-logo';
import {HeaderNavigation} from './header-navigation';
import {StyledHeader, StyledLoginContainer, StyledNavContainer} from './styles';

const items = [
  {name: 'Home', url: Routes.LANDING_PAGE.url},
  {name: 'Catalog', url: Routes.CATALOG.url},
  {name: 'About us', url: Routes.ABOUT.url},
  {name: 'Contacts', url: Routes.CONTACTS.url},
];

export const Header = () => (
  <StyledHeader>
    <HeaderDrawer items={items} />
    <HeaderLogo />
    <StyledNavContainer>
      <HeaderNavigation items={items} />
    </StyledNavContainer>
    <StyledLoginContainer>
      <HeaderLogin />
    </StyledLoginContainer>
    <CartHeader />
  </StyledHeader>
);
