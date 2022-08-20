import {styled} from '@mui/material/styles';
import CircleButton from 'core/components/Buttons/CircleButton';

export const StyledLandingPageFooterSection = styled('section')(() => ({
  position: 'relative',
  height: 0,
  zIndex: 2,
}));

export const StyledSubscribeContainer = styled('div')(() => ({
  position: 'relative',
}));

export const StyledSubscribeSection = styled('div')(({theme: {palette, spacing, breakpoints}}) => ({
  backgroundColor: palette.primary.light,
  borderRadius: 20,
  padding: spacing(4, 0),
  width: '100%',
  position: 'absolute',
  top: -165,
  [breakpoints.up('md')]: {
    top: -120,
  },
  [breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

export const StyledTextContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  textAlign: 'center',
  margin: spacing(0, 'auto', 2),
  [breakpoints.up('lg')]: {
    textAlign: 'left',
    display: 'flex',
    flexDirection: 'column',
    margin: 0,
  },
}));

export const StyledActionContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  position: 'relative',
  textAlign: 'center',
  margin: spacing(0, 3),
  [breakpoints.up('md')]: {
    display: 'flex',
    minWidth: 500,
  },
}));

export const StyledSubcribeButton = styled(CircleButton)(({theme: {breakpoints}}) => ({
  marginTop: 24,
  [breakpoints.up('md')]: {
    position: 'absolute',
    right: 0,
    marginTop: 0,
  },
  [breakpoints.up('lg')]: {
    right: -30,
  },
}));
