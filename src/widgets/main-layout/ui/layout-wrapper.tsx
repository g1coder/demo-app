import {styled} from '@mui/material/styles';
import {LANDING_PAGE_XL_CONTAINER_WIDTH} from 'shared/constants';

const LayoutWrapper = styled('div')(({theme: {breakpoints, spacing}}) => ({
  padding: spacing(5, 2),
  height: `100%`,
  [breakpoints.up('lg')]: {
    margin: 'auto',
    padding: spacing(5, 4),
  },
  [breakpoints.up('exl' as any)]: {
    maxWidth: LANDING_PAGE_XL_CONTAINER_WIDTH,
  },
}));

export default LayoutWrapper;
