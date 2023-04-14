import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {styled} from '@mui/material/styles';
import SeparatorImage from '@shared/assets/water_separator.jpg';

export const StyledWaterSeparatorImage = styled('div')({
  backgroundImage: `url(${SeparatorImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  height: '100%',
  left: 0,
  right: 0,
  maxHeight: '100vh',
});

export const StyledInnerContainer = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  paddingTop: 300,
  flexDirection: 'column',
  [breakpoints.up('md')]: {
    flexDirection: 'row',
    paddingTop: 200,
  },
}));

export const StyledManWithBottleImage = styled('img')(({theme: {breakpoints}}) => ({
  position: 'relative',
  maxHeight: 380,
  margin: 'auto',
  display: 'none',
  [breakpoints.up('xl')]: {
    display: 'block',
  },
}));

export const StyledConditions = styled('div')(({theme: {breakpoints}}) => ({
  position: 'relative',
  margin: 'auto',
  [breakpoints.up('md')]: {
    maxWidth: 350,
    paddingRight: 32,
  },
}));

export const StyledTimeInfo = styled((props) => (
  <List {...props}>
    {['Free Delivery Service', '7 days a week', '8:00 – 22:00 Every day'].map((name) => (
      <ListItem key={name} sx={{padding: 0}}>
        <ListItemIcon sx={{minWidth: 0, marginRight: 1}}>
          <DoneIcon color="secondary" />
        </ListItemIcon>
        <ListItemText primary={name} primaryTypographyProps={{variant: 'subtitle1'}} />
      </ListItem>
    ))}
  </List>
))(({theme: {spacing}}) => ({
  position: 'relative',
  margin: spacing(4, 0),
}));


