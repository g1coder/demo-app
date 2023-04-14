import {styled} from '@mui/material/styles';
import BottlePartTitle from './bottle-part-title.png';
import BottleWhole from './bottle-whole.png';

export const StyledSectionContainer = styled('div')({
  position: 'relative',
  backgroundColor: '#002579',
});

export const StyledBottleBg = styled('img')(({theme: {breakpoints}}) => ({
  display: 'none',
  [breakpoints.up('md')]: {
    display: 'block',
    position: 'absolute',
    top: 'calc(50% - 335px)',
    left: 'calc(50% - 335px)',
  },
}));

export const StyledBottleContainer = styled((props) => (
  <div {...props}>
    <figure>
      <img src={BottlePartTitle} alt="bottle" />
      <img src={BottleWhole} alt="bottle" />
    </figure>
  </div>
))(({theme: {spacing, breakpoints}}) => ({
  display: 'none',
  position: 'absolute',
  top: 50,
  left: `calc(50% - 220px)`,

  '& > figure': {
    position: 'relative',
    animation: 'jerking 3s cubic-bezier(.445,.05,.55,.95) infinite',
    margin: spacing(-3, 0, 0, 2),
    paddingTop: spacing(15),

    '& > img:nth-of-type(1)': {
      position: 'absolute',
      top: spacing(43),
      left: 55,
    },
    '& > img:nth-of-type(2)': {
      animation: 'jerking 3.3s cubic-bezier(.445,.05,.55,.95) infinite',
      marginTop: spacing(-3),
    },
  },

  [breakpoints.up('lg')]: {
    display: 'block',
  },

  '@keyframes jerking': {
    '0%': {
      marginTop: spacing(-3),
    },
    '50%': {
      marginTop: spacing(),
    },
  },
}));
