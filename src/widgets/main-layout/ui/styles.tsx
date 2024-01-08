import Box from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from '@shared/constants';
import {Breakpoint} from '@mui/material';

export const StyledContainer = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  backgroundColor: palette.primary.dark,
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

export const StyledLayoutWrapper = styled(Box)(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(5, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4),
  },
  [breakpoints.up('exl' as Breakpoint)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));
