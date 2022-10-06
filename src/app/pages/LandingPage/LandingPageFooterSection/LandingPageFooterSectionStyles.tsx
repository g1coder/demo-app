import {styled} from '@mui/material/styles';
import PrimaryButton from 'core/components/Buttons/PrimaryButton';

export const StyledLandingPageFooterSection = styled('section')(({theme: {breakpoints}}) => ({
  position: 'relative',
  zIndex: 2,
  [breakpoints.up('lg')]: {
    height: 0,
  },
}));

export const StyledSubscribeContainer = styled('div')({
  position: 'relative',
});

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
    minWidth: 500,
  },
}));

export const StyledSubcribeButton = styled(PrimaryButton)(({theme: {breakpoints}}) => ({
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
