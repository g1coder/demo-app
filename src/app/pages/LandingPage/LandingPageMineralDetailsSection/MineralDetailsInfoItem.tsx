import React, {memo} from 'react';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';

interface IProps {
  title: string;
  subtitle: string;
  text: string;
  dark?: boolean;
}

const StyledContainer = styled('div')(({theme: {breakpoints}}) => ({
  maxWidth: '100%',
  [breakpoints.up('lg')]: {
    maxWidth: 280,
  },
  [breakpoints.up('xl')]: {
    maxWidth: 350,
  },
}));

const MineralDetailsInfoItem = ({title, subtitle, text, dark}: IProps) => {
  const color = dark ? 'primary.dark' : 'white';
  return (
    <StyledContainer>
      <Typography variant="h5" sx={{fontSize: '30px'}} color={color}>
        {title}
      </Typography>
      <Typography variant="subtitle1" sx={{marginTop: -1, marginBottom: 2}}>
        {subtitle}
      </Typography>
      <Typography variant="body2" sx={{fontStyle: 'italic'}} color={color}>
        {text}
      </Typography>
    </StyledContainer>
  );
};

export default memo(MineralDetailsInfoItem);
