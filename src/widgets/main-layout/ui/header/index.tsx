import {CartHeader} from '@entities/cart';
import RouteConstants from '@shared/constants/route.constants';
import HeaderDrawer from './HeaderDrawer';
import HeaderLogin from './HeaderLogin';
import HeaderLogo from './HeaderLogo';
import HeaderNavigation from './HeaderVavigation';
import {StyledHeader, StyledLoginContainer, StyledNavContainer} from './styles';

const items = [
  {name: 'Home', url: RouteConstants.LANDING_PAGE.url},
  {name: 'Catalog', url: RouteConstants.CATALOG.url},
  {name: 'About us', url: RouteConstants.ABOUT.url},
  {name: 'Contacts', url: RouteConstants.CONTACTS.url},
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
