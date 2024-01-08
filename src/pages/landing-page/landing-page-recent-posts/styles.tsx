import {Box, Card, CardActions, CardMedia, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {Link} from 'react-router-dom';
import {SecondaryButton} from '@shared/ui-kit';

export const StyledPostsContainer = styled('div')(({theme: {spacing, breakpoints}}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: spacing(5, 0),
  flexFlow: 'row wrap',
  [breakpoints.up('xl')]: {
    flexFlow: 'row nowrap',
  },
}));

export const StyledCard = styled(Card)(({theme: {spacing, breakpoints}}) => ({
  borderRadius: spacing(2.5),
  margin: spacing(2, 'auto'),
  padding: spacing(0, 0, 4),
  width: '100%',
  maxWidth: 450,
  cursor: 'pointer',
  [breakpoints.up('xl')]: {
    margin: spacing(0, 2),
    minHeight: spacing(78),
    width: '33.3%',
  },
}));

export const StyledCardMediaContainer = styled('div')({
  position: 'relative',
  overflow: 'hidden',
});

export const StyledCardMedia = styled(CardMedia)<{component: string; alt: string}>({
  objectFit: 'contain',
  transition: 'all .5s ease-in',
  backgroundClip: 'padding-box',
  overflow: 'hidden',
  display: 'block',
  '&:hover': {
    transform: 'scale(1.1)',
  },
});

interface IStyledTitle {
  to: string;
  title: string;
}
export const StyledTitle = styled((props: IStyledTitle) => (
  <Typography {...props} component={Link} to={props.to} variant="h3">
    {props.title}
  </Typography>
))<IStyledTitle>(({theme: {palette, breakpoints}}) => ({
  textDecoration: 'none',
  color: palette.primary.light,
  transition: 'color 0.5s ease',
  '&:hover': {
    color: palette.primary.dark,
    transition: 'all 0.5s ease',
  },
  [breakpoints.up('md')]: {
    fontSize: 30,
  },
}));

export const StyledText = styled(Typography)(({theme: {spacing}}) => ({
  overflow: 'hidden',
  display: '-webkit-box',
  maxWidth: '100%',
  WebkitLineClamp: 3,
  WebkitBoxOrient: 'vertical',
  margin: spacing(2, 0),
}));

export const StyledCardActions = styled(CardActions)(({theme: {spacing}}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: spacing(0, 4),
  flexFlow: 'row wrap',
}));
export const StyledTextInfoContainer = styled(Box)(({theme: {palette, typography}}) => ({
  display: 'flex',
  fontWeight: 900,
  color: palette.primary.dark,
  justifyContent: 'space-between',
  ...typography.body2,
}));
export const StyledIconWithText = styled(Box)(({theme: {palette, spacing}}) => ({
  display: 'flex',
  alignItems: 'center',
  fontWeight: 900,
  color: palette.primary.dark,
  marginRight: spacing(2),
  '& > svg': {
    width: 14,
    height: 14,
    fill: palette.primary.light,
    marginRight: spacing(0.5),
  },
}));

export const StyledReadMoreButton = styled(SecondaryButton)(({theme: {spacing, breakpoints}}) => ({
  marginTop: spacing(2),
  [breakpoints.up('md')]: {
    marginTop: 'auto',
  },
}));

export const StyledButtonContainer = styled('div')(({theme: {spacing}}) => ({
  width: '100%',
  textAlign: 'center',
  paddingBottom: spacing(15),
}));
