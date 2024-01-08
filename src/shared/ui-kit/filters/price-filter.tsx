import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Slider, Typography} from '@mui/material';
import {styled} from '@mui/material/styles';
import {debounce} from '@shared/utils';
import {withBaseFilter} from '@shared/HOC';

const StyledSliderContainer = styled('div')(({theme: {spacing}}) => ({
  padding: spacing(0, 3, 0),
  display: 'flex',
  flexDirection: 'column',
  textAlign: 'center',
}));

interface IValue {
  min?: number;
  max?: number;
}

interface IProps {
  value: IValue | undefined;
  onChange: (value: IValue) => void;
  minLimit: number;
  maxLimit: number;
}

const getValueText = (value: number) => `$${value}`;

const Cmp = ({value, onChange, minLimit, maxLimit}: IProps) => {
  const [price, setPrice] = useState<IValue | undefined>(value);

  useEffect(() => {
    setPrice((currentValue) => {
      return currentValue?.max === value?.max && currentValue?.min === value?.min ? currentValue : value;
    });
  }, [value]);

  const debouncedApplyParams = useMemo(() => debounce(onChange, 1000), [onChange]);

  const handleChange = useCallback(
    (e: Event, newValue: number | number[]) => {
      const params: {min?: number; max?: number} = {};
      if (newValue[0] !== minLimit) {
        params.min = newValue[0];
      }
      if (newValue[1] !== maxLimit) {
        params.max = newValue[1];
      }
      setPrice(params);
      debouncedApplyParams(params);
    },
    [debouncedApplyParams, maxLimit, minLimit]
  );

  if (!price) return null;

  const sliderValue = [price.min || minLimit, price.max || maxLimit];

  return (
    <StyledSliderContainer>
      <Slider
        value={sliderValue}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={getValueText}
        min={minLimit}
        max={maxLimit}
      />
      <Typography
        variant="subtitle1"
        color="primary.dark"
        sx={{marginTop: 2, fontWeight: 900}}
      >{`$${sliderValue[0]} - $${sliderValue[1]}`}</Typography>
    </StyledSliderContainer>
  );
};

export const PriceFilter = memo(withBaseFilter(Cmp)<IProps>);
