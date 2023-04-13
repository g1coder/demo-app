import {styled} from "@mui/material/styles";
import {Typography} from "@mui/material";

export const StyledContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  [breakpoints.up('xl')]: {
    flexDirection: 'row',
  },
}));

export const StyledFiltersContainer = styled('div')({
  position: 'relative',
  minWidth: 320,
});

export const StyledCardContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  display: 'flex',
  flexFlow: 'row wrap',
  width: '100%',
  position: 'relative',
  padding: spacing(6, 0, 0),
  marginTop: spacing(2),
  '& > div': {
    margin: spacing(2, 'auto'),
  },
  [breakpoints.up('md')]: {
    justifyContent: 'space-between',
    '& > div': {
      margin: 0,
    },
  },
  [breakpoints.up('lg')]: {
    justifyContent: 'unset',
    '& > div': {
      margin: spacing(0, 2, 2),
    },
  },
}));

export const StyledTitle = styled(Typography)({
  position: 'absolute',
  top: 0,
  left: 16,
});