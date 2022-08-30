import _ from 'lodash';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {styled} from '@mui/material/styles';
import {Slider, Typography} from '@mui/material';
import withBaseFilter from 'features/catalog/HOC/withBaseFilter';

const StyledSliderContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(0, 3, 0),
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

export interface IProps {
  initialValues: number[] | undefined;
  onChange: (value: {min?: number; max?: number}) => void;
  min: number;
  max: number;
}

const getValueText = (value: number) => `$${value}`;

const PriceFilter = ({initialValues, onChange, min = 0, max = 50}: IProps) => {
  const [value, setValue] = useState<number[] | undefined>(initialValues);
  const debouncedApplyParams = useMemo(() => _.debounce(onChange, 1000), [onChange]);

  const handleChange = useCallback(
    (e, newValue) => {
      setValue(newValue);
      const params: {min?: number; max?: number} = {};
      if (newValue[0] !== min) {
        params.min = newValue[0];
      }
      if (newValue[1] !== max) {
        params.max = newValue[1];
      }
      debouncedApplyParams(params);
    },
    [debouncedApplyParams, max, min]
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
