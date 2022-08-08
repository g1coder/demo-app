import {styled} from '@mui/material/styles';
import {Paper} from '@mui/material';

export const StyledLandingPageReviewSection = styled('div')(() => ({
  textAlign: 'center',
  background: `url(${process.env.PUBLIC_URL}/images/landing-page/review-section-bg.jpg) no-repeat center center fixed`,
  backgroundSize: 'cover'
}));

export const StyledSwiperContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(8, 0)
}));

export const StyledSwiperSlideContent = styled(Paper)(({theme: {spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  minHeight: spacing(55),
  borderRadius: spacing(3),
  margin: spacing(0, 18)
}));

export const StyledSwiperSlideInnerContainer = styled('div')(({theme: {spacing}}) => ({
  textAlign: 'center',
  margin: `auto ${spacing(10)}`
}));

export const StyledAvatarContainer = styled('div')(({theme: {spacing}}) => ({
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'left',
  marginBottom: spacing(4),
  '& > div': {
    marginLeft: spacing(2)
  }
}));