import React from 'react';
import {styled} from '@mui/material/styles';

export const StyledSectionContainer = styled('section')(() => ({}));
export const StyledSectionBg = styled('div')(() => ({
  backgroundColor: '#002579',
}));
export const StyledContentContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(14, 0, 25),
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  position: 'relative'
}));
export const StyledContentColumn = styled('div')(({theme: {spacing}}) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  textAlign: 'left',
  '& > div': {
    marginBottom: spacing(10),
  },
  '&:nth-child(3)': {
    textAlign: 'right',
  },
}));

export const StyledBottleContainer = styled((props) => (
  <div {...props}>
    <figure>
      <img src={`${process.env.PUBLIC_URL}/images/landing-page/bottle-part-title.png`} alt="bottle" />
      <img src={`${process.env.PUBLIC_URL}/images/landing-page/bottle-whole.png`} alt="bottle" />
    </figure>
  </div>
))(({theme: {spacing}}) => ({
  position: 'absolute',
  top: 50,
  // width of the image is 440px
  left: `calc(50% - 220px)`,

  '& > figure': {
    position: 'relative',
    animation: 'moving_bottle 3s cubic-bezier(.445,.05,.55,.95) infinite',
    margin: spacing(-3, 0, 0, 2),
    paddingTop: spacing(15),

    '& > img:nth-child(1)': {
      position: 'absolute',
      top: spacing(43),
      left: 55,
    },
    '& > img:nth-child(2)': {
      animation: 'moving_bottle 3.3s cubic-bezier(.445,.05,.55,.95) infinite',
      marginTop: spacing(-3)
    },
  },

  '@keyframes moving_bottle': {
    '0%': {
      marginTop: spacing(-3),
    },
    '50%': {
      marginTop: spacing(),
    },
  },
}));
