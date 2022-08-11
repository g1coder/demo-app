import {styled} from '@mui/material/styles';
import {Drawer} from '@mui/material';
import {
  LANDING_PAGE_HEADER_HEIGHT,
  LANDING_PAGE_XL_CONTAINER_WIDTH,
} from 'app/constants/constants';

export const StyledHeader = styled('header')(({theme: {spacing, breakpoints}}) => ({
  height: LANDING_PAGE_HEADER_HEIGHT,
  padding: spacing(2, 2.5),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  [breakpoints.up('lg' as any)]: {
    position: 'relative',
    margin: 'auto',
    paddingTop: spacing(8)
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  }
}));

export const StyledLogoContainer = styled('figure')(({theme: {breakpoints}}) => ({
  margin: 0,
  '& > a > img': {
    maxWidth: 120,
  },
  [breakpoints.up('lg')]: {
    '& > a > img': {
      maxWidth: '100%',
    },
  },
}));

export const StyledIconContainer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'block',
  cursor: 'pointer',
  color: '#fff',
  [breakpoints.up('xl')]: {
    display: 'none'
  },
}));

export const StyledDrawer = styled(Drawer)(({theme: {breakpoints}}) => ({
  display: 'block',
  [breakpoints.up('xl')]: {
    display: 'none'
  },
}));