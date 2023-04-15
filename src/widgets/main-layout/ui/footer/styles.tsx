import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import {Fab} from '@mui/material';
import {styled} from '@mui/material/styles';
import {MAIN_LAYOUT_FOOTER_BG} from '@shared/constants/ui.constants';

export const StyledContainer = styled('footer')({
  backgroundColor: MAIN_LAYOUT_FOOTER_BG,
  position: 'relative',
});

export const StyledAboutContainer = styled('div')(({theme: {spacing}}) => ({
  maxWidth: 700,
  margin: `0 auto`,
  textAlign: 'center',
  padding: spacing(7, 0),
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
      backgroundColor: palette.primary.light,
    },
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
