import {styled} from '@mui/material/styles';
import {LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';

export const StyledSectionPaddingWrapper = styled('section')<{padding?: string}>(({theme: {breakpoints, spacing}, padding}) => ({
  padding: padding ?? spacing(10, 2, 2),
  [breakpoints.up('lg')]: {
    maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
    margin: 'auto',
    padding: padding ?? spacing(10, 2),
  },
}));