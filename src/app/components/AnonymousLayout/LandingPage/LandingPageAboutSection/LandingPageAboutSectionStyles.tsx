import {styled} from '@mui/material/styles';
import {LANDING_PAGE_HEADER_HEIGHT, LANDING_PAGE_SECTIONS_BOTTOM_PADDING} from 'app/constants/constants';


export const StyledSectionContainer = styled('section')(() => ({
  position: 'relative',
  height: `calc(100vh - ${LANDING_PAGE_HEADER_HEIGHT}px)`,
  paddingBottom: LANDING_PAGE_SECTIONS_BOTTOM_PADDING,
}));

export const StyledSectionHeader = styled('div')(({theme: {spacing}}) => ({
  margin: 'auto',
  textAlign: 'center',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing-page/heading-bg.png'})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  padding: spacing(0, 0, 3),
}));

export const StyledAboutInfoContainer = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row wrap',
  paddingTop: spacing(8),
  minHeight: 480,
}));
export const StyledAboutInfoText = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  flex: '50%',
  paddingRight: spacing(4),
}));

export const StyledAboutVideoContainer = styled('div')(() => ({
  position: 'relative',
  flex: '50%',
}));
export const StyledAboutVideoImage = styled('img')<{hide: boolean}>(({hide}) => ({
  position: 'absolute',
  width: '100%',
  cursor: 'pointer',
  left: 0,
  bottom: 0,
  opacity: hide ? 0 : 1,
  transition: 'all 3s ease',
}));
export const StyledPlayButton = styled('span')<{hide: boolean}>(({theme: {palette}, hide}) => ({
  opacity: hide ? 0 : 1,
  backgroundColor: palette.text.secondary,
  cursor: 'pointer',
  fill: '#fff',
  transition: 'all .3s ease',
  position: 'absolute',
  zIndex: 2,
  top: '50%',
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

export const StyledSectionFooter = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
  display: 'flex',
  flexFlow: 'row wrap',
  justifyContent: 'space-around',
  width: '100%',
  paddingTop: spacing(15)
}));
export const StyledSectionFooterItem = styled('div')(({theme: {palette, spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '25%',
  borderLeft: `1px solid ${palette.secondary.dark}`,
  '&:nth-last-child(4)': {
    border: 'none'
  },
  '& > img': {
    width:  'fit-content',
    marginBottom: spacing(2)
  }
}));
