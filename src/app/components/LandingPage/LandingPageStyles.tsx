import {styled} from '@mui/material/styles';
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from 'app/constants/constants';

export const StyledSectionPaddingWrapper = styled('section')<{padding?: string}>(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(10, 2, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4, 0),
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));
