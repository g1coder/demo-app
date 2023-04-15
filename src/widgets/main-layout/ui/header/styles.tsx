import {styled} from '@mui/material/styles';
import {
  LANDING_PAGE_HEADER_HEIGHT,
  MAIN_LAYOUT_HEADER_ORDER,
  LANDING_PAGE_XL_CONTAINER_WIDTH,
  MAIN_LAYOUT_HEADER_BG,
} from '@shared/constants/ui.constants';
import { Breakpoint } from "@mui/material";

export const StyledHeader = styled('header')(({theme: {spacing, breakpoints}}) => ({
  height: LANDING_PAGE_HEADER_HEIGHT,
  padding: spacing(2, 2.5),
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'fixed',
  zIndex: MAIN_LAYOUT_HEADER_ORDER,
  backgroundColor: MAIN_LAYOUT_HEADER_BG,
  [breakpoints.up('lg')]: {
    position: 'relative',
    margin: 'auto',
    padding: spacing(4),
  },
  [breakpoints.up('exl' as Breakpoint)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

export const StyledNavContainer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'none',
  [breakpoints.up('lg')]: {
    display: 'flex',
    alignItems: 'center',
  },
}));

export const StyledLoginContainer = styled('div')(({theme: {breakpoints}}) => ({
  display: 'none',
  [breakpoints.between('lg', 'xl')]: {
    display: 'block',
    position: 'absolute',
    right: 100,
  },
  [breakpoints.up('xl')]: {
    display: 'block',
    position: 'relative',
    marginRight: -180,
  },
}));
