import React, {memo, useCallback} from 'react';
import {styled} from '@mui/material/styles';
import {Slider, Typography} from '@mui/material';
import withBaseFilter from 'features/shop/HOC/withBaseFilter';

const StyledSliderContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(0, 3, 0),
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

export interface IProps {
  value: number[] | undefined;
  onChange: (value: {min: number; max: number}) => void;
  min: number;
  max: number;
}

const getValueText = (value: number) => `$${value}`;

const PriceFilter = ({value, onChange, min, max}: IProps) => {
  const handleChange = useCallback(
    (e, newValue) => {
      onChange({min: newValue[0], max: newValue[1]});
    },
    [onChange]
  );

  if (!value) return null;

  return (
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
  );
};

export default memo(withBaseFilter(PriceFilter)<IProps>);
