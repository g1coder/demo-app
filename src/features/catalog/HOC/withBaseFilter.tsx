import React from 'react';
import {styled} from '@mui/material/styles';
import {Typography} from '@mui/material';

const StyledContainer = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
  marginBottom: spacing(4),
}));

const StyledTitleContainer = styled('div')(({theme: {spacing, palette}}) => ({
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  backgroundColor: palette.primary.dark,
  padding: spacing(3),
}));

const StyledContentContainer = styled('div')(({theme: {spacing}}) => ({
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  backgroundColor: '#f1f6fb',
  padding: spacing(3, 3, 6),
  minHeight: spacing(10),
}));

interface IProps {
  title: string;
}

const withBaseFilter =
  (Component) =>
  <T extends any>({title, ...rest}: IProps & T) => {
    return (
      <StyledContainer>
        <StyledTitleContainer>
          <Typography variant="h5">{title}</Typography>
        </StyledTitleContainer>
        <StyledContentContainer>
          <Component {...rest} />
        </StyledContentContainer>
      </StyledContainer>
    );
  };

export default withBaseFilter;
