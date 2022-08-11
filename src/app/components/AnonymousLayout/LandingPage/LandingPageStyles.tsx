import {styled} from '@mui/material/styles';
import {
  LANDING_PAGE_HEADER_HEIGHT,
  LANDING_PAGE_XL_CONTAINER_WIDTH,
} from 'app/constants/constants';


export const StyledSectionPaddingWrapper = styled('section')<{padding?: string}>(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(10, 2, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    height: `calc(100% - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
    margin: 'auto',
    padding: spacing(5, 2, 0),
  },
  [breakpoints.up('exl'as any)] : {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  }
}));