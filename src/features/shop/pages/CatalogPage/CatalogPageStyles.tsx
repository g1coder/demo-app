import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT, MAIN_LAYOUT_HEADER_ORDER} from 'app/constants/constants';

export const StyledContainer = styled('div')(() => ({
  background: '#fff',
  position: 'absolute',
  top: LANDING_PAGE_HEADER_HEIGHT,
  left: 0,
  right: 0,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
}));

export const StyledContentContainer = styled('div')(() => ({
  position: 'relative',
  zIndex: MAIN_LAYOUT_HEADER_ORDER - 1,
  paddingBottom: 40,
}));

export const StyledMetaContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  padding: spacing(2),
  [breakpoints.up('md')]: {
    padding: spacing(2, 0),
  },
  [breakpoints.up('lg')]: {
    padding: spacing(2, 8),
  },
  [breakpoints.up('xl')]: {
    padding: spacing(2, 0),
  },
}));
