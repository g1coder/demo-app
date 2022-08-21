import React, {useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter, {IProps as IPriceFilter} from 'features/shop/components/FilterPanel/PriceFilter';

interface IProps {}

const StyledContainer = styled('div')(() => ({
  height: 800,
  width: 360,
}));

const FilterPanel = () => {
  const [priceFilter, setPriceFilter] = useState<number[]>([5, 20]);

  return (
    <StyledContainer>
      <div style={{display: 'block'}}>
        <PriceFilter title="Price" value={priceFilter} property="price" onChange={setPriceFilter} min={5} max={20} />
      </div>
    </StyledContainer>
  );
};

export default FilterPanel;
