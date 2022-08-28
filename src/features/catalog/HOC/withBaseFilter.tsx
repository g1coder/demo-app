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

const withBaseFilter =
  (Component) =>
  <T extends any>({title, ...rest}: {title: string} & T) => {
    // const debouncedOnChange = useMemo(() => _.debounce(onChange, 1000), [onChange]);
    //
    // const handleOnChange = useCallback(
    //   (value: T) => {
    //     console.log('handleOnChange from base', value);
    //     debouncedOnChange(value);
    //   },
    //   [debouncedOnChange]
    // );

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
