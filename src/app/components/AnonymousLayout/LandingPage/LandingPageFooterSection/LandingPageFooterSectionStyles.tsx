import {styled} from '@mui/material/styles';
import {Fab} from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import React from 'react';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import GoogleIcon from '@mui/icons-material/Google';

export const StyledFooterSection = styled('section')(() => ({}));

export const StyledSubscribeSection = styled('div')(({theme: {palette, spacing}}) => ({
  backgroundColor: palette.primary.light,
  borderRadius: 20,
  padding: spacing(4, 0),
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
}));
export const StyledTextContainer = styled('div')(({theme: {spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'left',
  marginRight: spacing(3),
}));
export const StyledActionContainer = styled('div')(() => ({
  display: 'flex',
  minWidth: 500,
  position: 'relative',
}));

export const StyledAboutContainer = styled('div')(({theme: {spacing}}) => ({
  maxWidth: 700,
  margin: `0 auto`,
  textAlign: 'center',
  padding: spacing(10, 0),
}));


export const StyledButtonContainer = styled((props) => (
  <ul {...props}>
    {[<TwitterIcon />, <FacebookOutlinedIcon />, <InstagramIcon />, <GoogleIcon />].map((icon) => (
      <li>
        <Fab sx={{color: 'primary.dark', backgroundColor: '#fff'}} component="a" href={'#'}>
          {icon}
        </Fab>
      </li>
    ))}
  </ul>
))(({theme: {spacing, palette}}) => ({
  listStyleType: 'none',
  padding: 0,
  '& > li': {
    display: 'inline-block',
    margin: spacing(0, 0.75),
    '& > a:hover': {
      backgroundColor: palette.primary.light
    }
  },
}));
