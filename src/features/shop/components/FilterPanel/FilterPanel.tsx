import React from 'react';
import {styled} from '@mui/material/styles';
import {Card} from '@mui/material';

interface IProps {}

const StyledContainer = styled(Card)(() => ({
  height: 800,
  width: 360,
  backgroundColor: '#f1f6fb',
}));

const FilterPanel = () => {
  return (
    <StyledContainer>
      <div style={{display: 'block'}}>Filter</div>
    </StyledContainer>
  );
};

export default FilterPanel;
