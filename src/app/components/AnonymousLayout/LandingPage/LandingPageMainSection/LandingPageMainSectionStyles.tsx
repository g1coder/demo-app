import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT} from 'app/constants/constants';
import {animated} from '@react-spring/web';
import {Typography} from '@mui/material';

export const StyledSectionContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  [breakpoints.up('xl')]: {
    height: `calc(100vh - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
  },
}));

export const StyledSliderContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  position: 'relative',
  height: `calc(90vh - ${LANDING_PAGE_HEADER_HEIGHT + 16}px)`,
  marginTop: spacing(2),
  '&::after': {
    content: '" "',
    width: '80%',
    height: 20,
    bottom: 20,
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: 0,
    boxShadow: '0 35px 70px rgba(0,0,0,.45)',
  },
  [breakpoints.up('xl')]: {
    height: '100%',
    width: '100%',
    margin: 0,
  },
}));

export const StyledSlideImage = styled(animated.div)<{bg: string}>(({theme: {spacing, breakpoints}, bg}) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  willChange: 'opacity',
  borderRadius: spacing(2, 13),
  background: `url(${bg}) no-repeat`,
  backgroundSize: 'cover',
  [breakpoints.up('xl')]: {
    borderRadius: spacing(4, 26),
    backgroundPosition: 'center',
  },
}));

export const StyledBottleImage = styled('img')(({theme: {breakpoints}}) => ({
  display: 'none',
  [breakpoints.up('xl')]: {
    display: 'block',
    position: 'absolute',
    bottom: 0,
    right: 30,
  },
}));

export const StyledTextContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  position: 'absolute',
  top: 0,
  bottom: 0,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  [breakpoints.up('xl')]: {
    textAlign: 'left',
    width: 'auto',
    bottom: 'auto',
    top: '25%',
    left: spacing(30)
  },
}));

export const StyledTextInnerContainer = styled('div')(() => ({

}));

export const StyledLeftInnerContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  [breakpoints.up('xl')]: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    zIndex: 2,
  },
}));

export const StyledInnerFirstTypography = styled(Typography)(() => ({
  textShadow: `1px 1px 0px rgb(17 44 145 / 60%)`,
}));

export const StyledInnerSecondTypography = styled(Typography)(({theme: {palette, spacing}}) => ({
  color: palette.primary.dark,
  textTransform: 'uppercase',
  marginTop: spacing(-1),
}));

export const StyledInnerSubtitleTypography = styled(Typography)(({theme: {spacing}}) => ({
  fontStyle: 'italic',
  maxWidth: spacing(70),
  marginTop: spacing(3),
  transition: 'color 5s ease',
}));

export const StyledInnerButtonContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  marginTop: spacing(5),
  '& > button': {
    margin: spacing(2, 1)
  },
  [breakpoints.up('xl')]: {
    marginTop: spacing(10),
    height: `calc(100vh - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
    justifyContent: 'space-between',
  },
}));
