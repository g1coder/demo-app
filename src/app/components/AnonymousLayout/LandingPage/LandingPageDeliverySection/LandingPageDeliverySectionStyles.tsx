import {styled} from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DoneIcon from '@mui/icons-material/Done';
import Paper from '@mui/material/Paper';


export const StyledWaterSeparatorImage = styled('div')<{src: string}>(({src}) => ({
  backgroundImage: `url(${src})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  height: '100%',
  left: 0,
  right: 0,
}));

export const StyledInnerContainer = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  margin: 'auto',
  paddingTop: spacing(36),
}));

export const StyledManWithBottleImage = styled('img')(() => ({
  position: 'relative',
  maxHeight: 380,
  margin: 'auto',
}));

export const StyledConditions = styled('div')(() => ({
  position: 'relative',
  width: '30%',
  margin: 'auto'
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
export const StyledDeliveryFormContainer = styled(Paper)(({theme: {spacing}}) => ({
  position: 'relative',
  padding: spacing(5, 8),
  borderRadius: spacing(3),
  margin: 'auto',
  textAlign: 'center',
  boxShadow: '0 30px 30px rgb(0 0 0 / 25%)'
}));
