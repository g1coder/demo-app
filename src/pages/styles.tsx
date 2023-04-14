import {styled} from '@mui/material/styles';
import Box from '@mui/material/Box';
import SeparatorImage from '@shared/assets/water_separator.jpg';

export const StyledContainer = styled(Box)(({theme: {palette}}) => ({
  position: 'relative',
  overflow: 'hidden',
  display: 'flex',
  height: '100vh',
  width: '100%',
  backgroundColor: palette.primary.dark,
}));

export const StyledInnerContainer = styled('div')({
  margin: 'auto',
  zIndex: 1,
});

export const StyledImageDecorator = styled('div')({
  backgroundImage: `url(${SeparatorImage})`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  position: 'absolute',
  width: '100%',
  height: '100%',
});
