import {CartHeader} from '@entities/cart';
import Routes from '@shared/constants/routes.constants';
import HeaderDrawer from './HeaderDrawer';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderVavigation';
import {StyledHeader, StyledLoginContainer, StyledNavContainer} from './styles';

const items = [
  {name: 'Home', url: Routes.LANDING_PAGE.url},
  {name: 'Catalog', url: Routes.CATALOG.url},
  {name: 'About us', url: Routes.ABOUT.url},
  {name: 'Contacts', url: Routes.CONTACTS.url},
];

const Header = () => {
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
      <CartHeader />
    </StyledHeader>
  );
};

export default Header;
