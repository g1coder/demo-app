import React, {memo} from 'react';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';

interface IProps {
  title: string;
  subtitle: string;
  text: string;
}


const StyledContainer = styled('div')(({theme: {breakpoints}}) => ({
  maxWidth: '100%',
  [breakpoints.up('lg')]: {
    maxWidth: 280,
  },
  [breakpoints.up('xl')]: {
    maxWidth: 350,
  }
}));

const MineralDetailsInfoItem = ({title, subtitle, text}: IProps) => {
  return (
    <StyledContainer>
      <Typography variant="h5" sx={{fontSize: '30px'}}>{title}</Typography>
      <Typography variant="subtitle1" sx={{marginTop: -1, marginBottom: 2}}>{subtitle}</Typography>
      <Typography variant="body2" sx={{fontStyle: 'italic'}}>{text}</Typography>
    </StyledContainer>
  )
};

export default memo(MineralDetailsInfoItem);