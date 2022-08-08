import {styled} from '@mui/material/styles';
import {LANDING_PAGE_LG_CONTAINER_WIDTH} from 'app/constants/constants';

export const StyledPaddingSectionContainer = styled('section')<{padding?: string}>(({theme: {breakpoints, spacing}, padding}) => ({
  padding: padding ?? spacing(12, 0),
  [breakpoints.up('lg')]: {
    maxWidth: LANDING_PAGE_LG_CONTAINER_WIDTH,
    margin: 'auto',
  },
}));