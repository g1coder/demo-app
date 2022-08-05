import React, {memo} from 'react';
import {Typography} from '@mui/material';
import {styled} from '@mui/material/styles';

interface IProps {
  title: string;
  subtitle: string;
}

const StyledSectionHeader = styled('div')(({theme: {spacing}}) => ({
  margin: 'auto',
  textAlign: 'center',
  backgroundImage: `url(${process.env.PUBLIC_URL + '/images/landing-page/heading-bg.png'})`,
  backgroundPosition: '50% 100%',
  backgroundRepeat: 'no-repeat',
  padding: spacing(0, 0, 3),
}));

const LandingPageSectionHeader = ({title, subtitle}: IProps) => {
  return (
    <StyledSectionHeader>
      <Typography variant="subtitle1">
        {subtitle}
      </Typography>
      <Typography variant="h3">
        {title}
      </Typography>
    </StyledSectionHeader>
  )
};

export default memo(LandingPageSectionHeader);