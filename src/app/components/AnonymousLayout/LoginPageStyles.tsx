import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledContainer = styled(Box)(() => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
  width: '100%',
}));

export const StyledLeftPanel = styled('div')(({theme}) => ({
  display: 'none',
  [theme.breakpoints.up('lg')]: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: 460,
    height: '100%',
    overflow: 'hidden',
  },
}));

export const StyledLeftPanelImage = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  marginRight: 1,
  position: 'absolute',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/login-bg.png'})`,
  backgroundSize: 'cover',
}));

export const StyledRightPanel = styled('div')(({theme}) => ({
  position: 'relative',
  height: '100%',
  padding: theme.spacing(0, 3),

  [theme.breakpoints.up('lg')]: {
    position: 'relative',
    flex: '1 1 auto',
    marginLeft: 460,
  },
}));

export const StyledRightPanelCenterWrapper = styled('div')(() => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
}));

export const StyledFormContainer = styled('div')(({theme}) => ({
  width: '100%',
  maxWidth: 580,
  marginTop: theme.spacing(2),
}));

export const StyledInfoMessage = styled('div')<{variant: 'success' | 'error'}>(({theme, variant}) => ({
  background: variant === 'success' ? 'rgb(242, 251, 250)' : 'rgb(253, 243, 245)',
  borderRadius: 3,
  padding: theme.spacing(1.5, 2),
  margin: theme.spacing(2, 0),
}));
