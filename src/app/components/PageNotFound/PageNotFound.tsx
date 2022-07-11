import React from 'react';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';
import {Link} from 'react-router-dom';

const StyledContainer = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '100%',
  margin: 'auto'
}));

const StyledContent = styled('div')(() => ({
  textAlign: 'center',
  maxWidth: 400
}));

const StyledBackButton = styled(Link)(({theme}) => ({
  marginTop: theme.spacing(2),
  cursor: 'pointer',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

interface IProps {
  redirectPath: string;
}

const PageNotFound = ({redirectPath}: IProps) => (
  <StyledContainer>
    <StyledContent>
      <Typography variant="h4">There's nothing here</Typography>
      <StyledBackButton to={redirectPath}>Back</StyledBackButton>
    </StyledContent>
  </StyledContainer>
);

export default PageNotFound;
