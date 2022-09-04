import React, {useCallback} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import SecondaryButton from 'core/components/Buttons/SecondaryButton';
import {Typography} from '@mui/material';
import AppRoutes from 'core/constants/AppRoutes';

const TABLET_MODE = 'lg';
const DESKTOP_MODE = 'xl';

interface IProps {
  inDrawer?: boolean;
}

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

const HeaderLogin = ({inDrawer}: IProps) => {
  const navigate = useNavigate();

  const handleOnClick = useCallback(() => {
    navigate(AppRoutes.LOGIN.url);
  }, [navigate]);

  const buttons = (
    <>
      <SecondaryButton title="Sign up" size="small" href={AppRoutes.LOGIN.url} />
      <Typography variant="body1" component={Link} to={AppRoutes.LOGIN.url}>
        Sign in
      </Typography>
    </>
  );

  if (inDrawer) {
    return <StyledMobileContainer>{buttons}</StyledMobileContainer>;
  }

  return (
    <>
      <StyledTabletContainer onClick={handleOnClick}>
        <LoginIcon />
      </StyledTabletContainer>
      <StyledDesktopContainer>{buttons}</StyledDesktopContainer>
    </>
  );
};

export default HeaderLogin;
