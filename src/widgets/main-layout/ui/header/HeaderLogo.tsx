import {styled} from '@mui/material/styles';
import AppLogo from '@shared/assets/header-logo.png';
import Routes from '@shared/constants/routes.constants';

const StyledLogo = styled('img')(({theme: {breakpoints}}) => ({
  margin: 0,
  maxWidth: 180,
  userSelect: 'none',
  [breakpoints.up('lg')]: {
    maxWidth: 200,
  },
}));

const HeaderLogo = () => (
  <a href={Routes.LANDING_PAGE.url}>
    <StyledLogo src={AppLogo} alt="company-logo" />
  </a>
);

export default HeaderLogo;
