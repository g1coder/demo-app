import {styled} from "@mui/material/styles";

export const StyledContentColumn = styled('div')<{align: 'left' | 'right'}>(({theme: {breakpoints}, align}) => ({
  textAlign: 'center',
  '& > div': {
    marginBottom: 40,
  },
  [breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    textAlign: align,
    '&:nth-of-type(3)': {
      textAlign: 'right',
    },
    '& > div': {
      marginBottom: 80,
    },
  },
}));

export const StyledContentContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  padding: spacing(8, 0, 0),
  position: 'relative',
  textAlign: 'center',
  [breakpoints.up('md')]: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  [breakpoints.up('lg')]: {
    padding: spacing(14, 0, 25),
  },
}));
