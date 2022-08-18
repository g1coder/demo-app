import {styled} from '@mui/material/styles';
import {Paper} from '@mui/material';
import ReviewBg from './review-section-bg.jpg';
import CircleButton from 'core/components/Buttons/CircleButton';

export const StyledLandingPageReviewSection = styled('div')(() => ({
  position: 'relative',
  textAlign: 'center',
}));

export const StyledSectionBg = styled('div')(() => ({
  background: `url(${ReviewBg}) no-repeat center center fixed`,
  backgroundSize: 'cover',
  position: 'absolute',
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  mixBlendMode: 'color-burn'
}));

export const StyledSwiperContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(8, 0),
}));

export const StyledSwiperSlideContent = styled(Paper)(({theme: {spacing, breakpoints}}) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: spacing(55),
  borderRadius: spacing(3),
  [breakpoints.up('lg')]: {
    margin: spacing(0, 18),
  },
}));

export const StyledSwiperSlideInnerContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  textAlign: 'center',
  margin: spacing(8, 2),
  [breakpoints.down('xl')]: {
    '& > h5': {
      marginTop: 32,
      fontSize: 16,
    },
  },
  [breakpoints.up('lg')]: {
    margin: `auto ${spacing(10)}`,
  },
}));

export const StyledAvatarContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  '& > div': {
    margin: 'auto',
  },
  [breakpoints.up('lg')]: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'left',
    marginBottom: spacing(4),
    '& > div': {
      margin: 'auto 8px',
    },
  },
}));

export const StyledButtonContainer = styled(CircleButton)(({theme: {spacing, breakpoints}}) => ({
  margin: spacing(5, 'auto'),
  [breakpoints.up('md')]: {
    margin: spacing(0, 'auto', 5),
  },
}));
