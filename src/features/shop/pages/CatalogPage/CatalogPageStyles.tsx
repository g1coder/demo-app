import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT, MAIN_LAYOUT_HEADER_ORDER} from 'app/constants/constants';

export const StyledContainer = styled('div')(() => ({
  background: 'linear-gradient(90deg, rgba(255,255,255,1) 17%, rgba(223,222,217,1) 55%, rgba(255,255,255,1) 88%)',
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
