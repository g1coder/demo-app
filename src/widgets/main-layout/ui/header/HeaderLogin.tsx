import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {useCallback, useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import RouteConstants from '@shared/constants/route.constants';
import SecondaryButton from '@shared/ui/Button/SecondaryButton';
import {AuthContext, IAuthContext} from '@widgets/auth/lib/AuthContext';

const TABLET_MODE = 'lg';
const DESKTOP_MODE = 'xl';

const StyledMobileContainer = styled('div')(({theme: {palette, spacing}}) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  padding: spacing(0, 5, 5, 0),
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  '& > a': {
    textDecoration: 'none',
    marginRight: spacing(2),
    color: palette.primary.dark,
  },
}));

const StyledTabletContainer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'none',
  cursor: 'pointer',
  [breakpoints.between(TABLET_MODE, DESKTOP_MODE)]: {
    display: 'block',
  },
}));

const StyledDesktopContainer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'none',
  [breakpoints.up(DESKTOP_MODE)]: {
    display: 'block',
  },
  '& > a': {
    textDecoration: 'none',
    marginLeft: 16,
    color: '#fff',
  },
}));

const StyledLoggedContainer = styled('div')({
  display: 'flex',
});

interface IProps {
  inDrawer?: boolean;
}

const HeaderLogin = ({inDrawer}: IProps) => {
  const navigate = useNavigate();
  const {user, logout} = useContext<IAuthContext>(AuthContext);

  const handleOnClick = useCallback(() => {
    if (user) {
      logout();
    } else {
      navigate(RouteConstants.LOGIN.url);
    }
  }, [navigate, user]);

  const content = user ? (
    <StyledLoggedContainer>
      <Typography variant="body1">{user.name}</Typography>
      <LogoutIcon sx={{marginLeft: 1, cursor: 'pointer'}} onClick={logout} />
    </StyledLoggedContainer>
  ) : (
    <>
      <SecondaryButton title="Sign up" size="small" href={RouteConstants.SIGNUP.url} />
      <Typography variant="body1" component={Link} to={RouteConstants.LOGIN.url}>
        Sign in
      </Typography>
    </>
  );

  if (inDrawer) {
    return <StyledMobileContainer>{content}</StyledMobileContainer>;
  }

  return (
    <>
      <StyledTabletContainer onClick={handleOnClick}>{user ? <LogoutIcon /> : <LoginIcon />}</StyledTabletContainer>
      <StyledDesktopContainer>{content}</StyledDesktopContainer>
    </>
  );
};

export default HeaderLogin;
