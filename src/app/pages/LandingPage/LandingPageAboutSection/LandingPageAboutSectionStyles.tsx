import {styled} from '@mui/material/styles';

export const StyledSectionContainer = styled('div')({
  position: 'relative',
  height: `100%`,
  paddingBottom: 32,
});

export const StyledAboutInfoContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  position: 'relative',
  paddingTop: spacing(8),
  [breakpoints.up('lg')]: {
    display: 'flex',
    flexFlow: 'row wrap',
    minHeight: 480,
  },
}));
export const StyledAboutInfoText = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  [breakpoints.up('lg')]: {
    display: 'flex',
    flexDirection: 'column',
    flex: '50%',
    paddingRight: 32,
  },
}));

export const StyledAboutVideoContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  marginTop: 32,
  width: '100%',
  height: 200,
  '& > iframe': {
    borderRadius: 10,
  },
  [breakpoints.up('md')]: {
    height: 400,
    '& > iframe': {
      borderRadius: 20,
    },
  },
  [breakpoints.up('lg')]: {
    flex: '50%',
    margin: 0,
  },
}));

export const StyledAboutVideoImage = styled('img')<{hide: boolean}>(({hide}) => ({
  position: 'absolute',
  width: '100%',
  height: '100%',
  cursor: 'pointer',
  left: 0,
  bottom: 0,
  opacity: hide ? 0 : 1,
  transition: 'all 3s ease',
}));

export const StyledPlayButton = styled('span')<{hide: boolean}>(({theme: {palette, breakpoints}, hide}) => ({
  opacity: hide ? 0 : 1,
  backgroundColor: palette.text.secondary,
  cursor: 'pointer',
  fill: '#fff',
  transition: 'all .3s ease',
  position: 'absolute',
  zIndex: 2,
  top: 'calc(50% + 12.5px)',
  left: '50%',
  transform: 'translate(-50%,-50%) scale(1)',
  display: hide ? 'none' : 'block',
  width: 100,
  height: 100,
  borderRadius: '50%',
  backgroundClip: 'padding-box',
  border: '14px solid rgba(255,255,255,.5)',
  animationPlayState: 'paused',
  animationName: 'glowing',
  animationDuration: '1.5s',
  animationIterationCount: 'infinite',
  '&:hover': {
    animationPlayState: 'running',
    backgroundColor: palette.secondary.main,
  },
  '&::after': {
    transition: 'all .3s ease',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%) scale(1)',
    display: 'block',
    content: '""',
    width: 130,
    height: 130,
    borderRadius: '50%',
    backgroundClip: 'padding-box',
    border: '30px solid rgba(255,255,255,.5)',
  },
  [breakpoints.up('lg')]: {
    top: '50%',
  },
  '@keyframes glowing': {
    '0%, 100%': {
      transform: 'translate(-50%,-50%) scale(1)',
      borderColor: 'rgba(255,255,255,.5)',
    },
    '50%': {
      transform: 'translate(-50%,-50%) scale(.95)',
      borderColor: '#fff',
    },
  },
}));

export const StyledTextImageContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  width: '100%',
  paddingTop: 32,
  [breakpoints.up('lg')]: {
    paddingTop: 64,
    flexFlow: 'row',
  },
}));

export const StyledSectionTextImageItem = styled('div')(({theme: {palette, breakpoints}}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  border: 'none',
  textAlign: 'center',
  width: '45%',
  margin: '32px 0',
  '& > img': {
    height: 80,
    marginBottom: 16,
  },
  [breakpoints.up('xl')]: {
    width: '25%',
    borderLeft: `1px solid ${palette.secondary.dark}`,
    '&:first-of-type': {
      border: 'none',
    },
  },
}));
