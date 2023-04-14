import {styled} from '@mui/material/styles';
import AppLogo from '@shared/assets/header-logo.png';
import AppRoutes from '@shared/constants/AppRoutes';

const StyledLogo = styled('img')(({theme: {breakpoints}}) => ({
  margin: 0,
  maxWidth: 180,
  userSelect: 'none',
  [breakpoints.up('lg')]: {
    maxWidth: 200,
  },
}));

const HeaderLogo = () => (
  <a href={AppRoutes.LANDING_PAGE.url}>
    <StyledLogo src={AppLogo} alt="company-logo" />
  </a>
);

export default HeaderLogo;
