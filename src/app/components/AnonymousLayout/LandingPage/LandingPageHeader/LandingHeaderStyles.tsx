import {styled} from '@mui/material/styles';
import {Drawer} from '@mui/material';
import {LANDING_PAGE_HEADER_HEIGHT, LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';

export const StyledHeader = styled('header')(({theme: {spacing, breakpoints}}) => ({
  padding: spacing(2, 2.5),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [breakpoints.up('md')]: {
    maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
    margin: 'auto',
    paddingTop: spacing(5)
  },
  height: LANDING_PAGE_HEADER_HEIGHT
}));

export const StyledLogoContainer = styled('figure')(({theme: {breakpoints}}) => ({
  margin: 0,
  '& > a > img': {
    maxWidth: 120,
  },
  [breakpoints.up('xl')]: {
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