import React from 'react';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';

interface IProps {
  bold?: boolean;
}

const StyledTypography = styled(Typography)<{bold: boolean}>(({bold}) => ({
  textShadow: !bold ? `1px 1px 0px rgb(17 44 145 / 60%)` : undefined,
  color: '#fff',
}));

const H2Header = ({bold}: IProps) => {
  return <StyledTypography bold={!!bold} />;
};

export default H2Header;
