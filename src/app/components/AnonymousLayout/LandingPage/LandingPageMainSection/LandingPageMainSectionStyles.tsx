import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT, LANDING_PAGE_SECTIONS_BOTTOM_PADDING} from 'app/constants/constants';
import {animated} from '@react-spring/web';
import {Typography} from '@mui/material';

export const StyledSectionContainer = styled('section')(() => ({
  position: 'relative',
  height: `calc(100vh - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
  paddingBottom: LANDING_PAGE_SECTIONS_BOTTOM_PADDING,
}));
export const StyledSectionBackground = styled('div')(() => ({
  position: 'relative',
  height: '100%',
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
}));
export const StyledSectionBackgroundImage = styled(animated.img)(({theme: {spacing}}) => ({
  height: '100%',
  width: '100%',
  position: 'absolute',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  willChange: 'opacity',
  borderRadius: spacing(4, 26),
}));
export const StyledBottleImage = styled('img')(() => ({
  position: 'absolute',
  bottom: 0,
  right: 30,
}));

export const StyledLeftInnerContainer = styled('div')(() => ({
  position: 'absolute',
  top: '20%',
  left: '10%',
  zIndex: 2,
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
  transition: 'color 5s ease',
  fontStyle: 'italic',
  fontSize: 18,
  marginTop: spacing(3),
  maxWidth: spacing(70),
}));
export const StyledInnerButtonContainer = styled('div')(({theme: {spacing}}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: spacing(47),
  marginTop: spacing(10),
}));
