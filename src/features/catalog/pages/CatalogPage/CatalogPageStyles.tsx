import {styled} from '@mui/material/styles';
import {Chip} from '@mui/material';

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

export const StyledFilterChip = styled(Chip)(() => ({
  marginRight: 8,
}));
