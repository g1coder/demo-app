import {styled} from '@mui/material/styles';
import {Fab} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';
import CircleButton from 'core/components/Buttons/CircleButton';

export const StyledLandingPageFooterSection = styled('footer')(() => ({
  backgroundColor: '#002579',
  position: 'relative'
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
    margin: 0
  }
}));

export const StyledActionContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  position: 'relative',
  textAlign: 'center',
  margin: spacing(0, 3),
  [breakpoints.up('md')]: {
    display: 'flex',
    minWidth: 500,
  }
}));

export const StyledSubcribeButton = styled(CircleButton)(({theme: {breakpoints}}) => ({
  marginTop: 24,
  [breakpoints.up('md')]: {
    position: 'absolute',
    right: 0,
    marginTop: 0,
  },
  [breakpoints.up('lg')]: {
    right: -30
  }
}));

export const StyledAboutContainer = styled('div')(({theme: {spacing}}) => ({
  maxWidth: 700,
  margin: `0 auto`,
  textAlign: 'center',
  padding: spacing(20, 0, 5)
}));

export const StyledButtonContainer = styled((props) => (
  <ul {...props}>
    {[<TwitterIcon />, <FacebookOutlinedIcon />, <InstagramIcon />, <GoogleIcon />].map((icon, index) => (
      <li key={index}>
        <Fab sx={{color: 'primary.dark', backgroundColor: '#fff'}} component="a" href={'#'}>
          {icon}
        </Fab>
      </li>
    ))}
  </ul>
))(({theme: {spacing, palette}}) => ({
  listStyleType: 'none',
  padding: 0,
  margin: 0,
  '& > li': {
    display: 'inline-block',
    margin: spacing(0, 0.75),
    '& > a:hover': {
      backgroundColor: palette.primary.light
    }
  },
}));


export const StyledAboutInfoContainer = styled('div')(({theme: {palette, spacing}}) => ({
  display: 'flex',
  justifyContent: 'center',
  backgroundColor: '#001c5c',
  color: palette.text.whitePrimary,
  padding: spacing(4, 0),
  '& > a': {
    fontFamily: 'sans-serif',
    textDecoration: 'none',
    color: palette.primary.light,
    marginRight: spacing(2),
    transition: 'color 0.3s ease',
    '&:hover': {
      color: palette.text.whitePrimary,
    },
  },
}));