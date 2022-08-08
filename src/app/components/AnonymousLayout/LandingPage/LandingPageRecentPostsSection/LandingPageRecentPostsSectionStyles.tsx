import React from 'react';
import {styled} from '@mui/material/styles';
import {Card, CardActions, CardMedia, Typography} from '@mui/material';
import {Link} from 'react-router-dom';

export const StyledPostsContainer = styled('div')(({theme: {spacing}}) => ({
  display: 'flex',
  justifyContent: 'space-between',
  padding: spacing(5, 0),
}));

export const StyledCard = styled(Card)(({theme: {spacing}}) => ({
  borderRadius: spacing(2.5),
  margin: spacing(0, 2),
  width: '33.3%',
  minHeight: spacing(78),
  cursor: 'pointer',
}));

export const StyledCardMedia = styled(CardMedia)<{component: string; alt: string}>(() => ({
  objectFit: 'contain',
  transition: 'all .5s ease-in',
  backgroundClip: 'padding-box',
  overflow: 'hidden',
  display: 'block',
  '&:hover': {
    transform: 'scale(1.1)',
  }
}));

interface IStyledTitle {
  to: string;
  title: string;
}
export const StyledTitle = styled((props: IStyledTitle) => (
  <Typography {...props} component={Link} to={props.to}>
    {props.title}
  </Typography>
))<IStyledTitle>(({theme: {palette}}) => ({
  fontSize: 30,
  fontWeight: 900,
  textDecoration: 'none',
  color: palette.primary.light,
  transition: 'color 0.5s ease',
  '&:hover': {
    color: palette.primary.dark,
    transition: 'all 0.5s ease',
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
}));
export const StyledTextInfoContainer = styled(Typography)(({theme: {palette, spacing}}) => ({
  display: 'flex',
  fontWeight: 900,
  color: palette.primary.dark,
  justifyContent: 'space-between',
  '& > span': {
    marginRight: spacing(2),
  },
}));
export const StyledIconWithText = styled(Typography)(({theme: {palette, spacing}}) => ({
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

export const StyledButtonContainer = styled('div')(({theme: {spacing}}) => ({
  width: '100%',
  textAlign: 'center',
  paddingBottom: spacing(15)
}));
