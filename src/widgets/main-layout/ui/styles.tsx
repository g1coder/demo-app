import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import {LANDING_PAGE_HEADER_HEIGHT, LANDING_PAGE_XL_CONTAINER_WIDTH} from 'shared/constants';

export const StyledContainer = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.dark,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledContentContainer = styled(Box)(({theme: {breakpoints}}) => ({
  paddingTop: LANDING_PAGE_HEADER_HEIGHT,
  flex: '1 1 auto',
  [breakpoints.up('lg')]: {
    paddingTop: 40,
  },
}));
