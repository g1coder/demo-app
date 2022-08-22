import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT, MAIN_LAYOUT_HEADER_ORDER} from 'app/constants/constants';

export const StyledCatalogLayoutContainer = styled('div')(() => ({
  background: '#fff',
  position: 'absolute',
  top: LANDING_PAGE_HEADER_HEIGHT,
  left: 0,
  right: 0,
  bottom: 0,
  height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
}));

export const StyledCatalogLaouytContent = styled('div')(() => ({
  position: 'relative',
  zIndex: MAIN_LAYOUT_HEADER_ORDER - 1,
  paddingBottom: 40,
}));
