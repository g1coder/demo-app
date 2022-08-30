import React from 'react';
import {styled} from '@mui/material/styles';
import {Paper, Skeleton, Typography} from '@mui/material';

const borderRadius = 20;

const StyledContainer = styled(Paper)(({theme: {spacing}}) => ({
  position: 'relative',
  marginBottom: spacing(4),
  borderRadius,
}));

const StyledTitleContainer = styled('div')(({theme: {spacing, palette}}) => ({
  borderTopRightRadius: borderRadius,
  borderTopLeftRadius: borderRadius,
  backgroundColor: palette.primary.dark,
  padding: spacing(3),
}));

const StyledContentContainer = styled('div')(({theme: {spacing}}) => ({
  borderBottomRightRadius: borderRadius,
  borderBottomLeftRadius: borderRadius,
  backgroundColor: '#f1f6fb',
  padding: spacing(3, 3, 6),
  minHeight: spacing(10),
}));

const StyledSkeleton = styled(Skeleton)(() => ({
  width: '100%',
}));

const withBaseFilter =
  (Component) =>
  <T extends any>({title, loading, ...rest}: {title: string; loading: boolean} & T) => {
    return (
      <StyledContainer elevation={3} square variant="elevation">
        <StyledTitleContainer>
          <Typography variant="h5">{title}</Typography>
        </StyledTitleContainer>
        <StyledContentContainer>
          {loading ? <StyledSkeleton animation="pulse" variant="rectangular" /> : <Component {...rest} />}
        </StyledContentContainer>
      </StyledContainer>
    );
  };

export default withBaseFilter;
