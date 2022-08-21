import React, {memo, useCallback} from 'react';
import {styled} from '@mui/material/styles';
import {Slider, Typography} from '@mui/material';

const StyledContainer = styled('div')(({theme: {spacing}}) => ({
  position: 'relative',
}));

const StyledTitleContainer = styled('div')(({theme: {spacing, palette}}) => ({
  borderTopRightRadius: 20,
  borderTopLeftRadius: 20,
  backgroundColor: palette.primary.dark,
  padding: spacing(3),
}));

const StyledSliderContainer = styled('div')(({theme: {spacing}}) => ({
  borderBottomRightRadius: 20,
  borderBottomLeftRadius: 20,
  backgroundColor: '#f1f6fb',
  padding: spacing(3, 6),
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

export interface IProps {
  title: string;
  value: number[];
  property: string;
  onChange: (value: number[]) => void;
  min: number;
  max: number;
}

const getValueText = (value: number) => `$${value}`;

const PriceFilter = ({title, value, onChange, min, max}: IProps) => {
  const handleChange = useCallback(
    (e, newValue) => {
      onChange(newValue);
    },
    [onChange]
  );

  return (
    <StyledContainer>
      <StyledTitleContainer>
        <Typography variant="h5">{title}</Typography>
      </StyledTitleContainer>
      <StyledSliderContainer>
        <Slider
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          getAriaValueText={getValueText}
          min={min}
          max={max}
        />
        <Typography
          variant="subtitle1"
          color="primary.dark"
          sx={{marginTop: 2, fontWeight: 900}}
        >{`$${value[0]} - $${value[1]}`}</Typography>
      </StyledSliderContainer>
    </StyledContainer>
  );
};

export default memo(PriceFilter);
