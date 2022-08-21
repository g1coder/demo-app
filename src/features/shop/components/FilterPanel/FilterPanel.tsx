import _ from 'lodash';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter, {IProps as IPriceFilterProps} from 'features/shop/components/FilterPanel/PriceFilter';
import TagFilter, {IProps as ITagFilterProps} from 'features/shop/components/FilterPanel/TagFilter';
import IProductParams from 'features/shop/models/IProductParams';

const StyledContainer = styled('div')(() => ({
  height: 800,
  width: 360,
}));

interface IProps {
  priceRange: Pick<IPriceFilterProps, 'min' | 'max'>;
  tags: ITagFilterProps['items'];
  onChange: (value: IProductParams) => void;
}

const FilterPanel = ({tags, priceRange, onChange}: IProps) => {
  const [price, setPrice] = useState<number[]>([0, 50]);
  const [activeTag, setActiveTag] = useState<string | undefined>();

  const applyFilters = useCallback(
    (price: number[], tag: string | undefined) => {
      onChange({min: price[0], max: price[1], tag});
    },
    [onChange]
  );

  const debouncedApplyParams = useMemo(() => _.debounce(applyFilters, 1000), [applyFilters]);

  useEffect(() => {
    debouncedApplyParams(price, activeTag);
  }, [price, activeTag, debouncedApplyParams]);

  return (
    <StyledContainer>
      <PriceFilter
        title="Price"
        value={price}
        onChange={setPrice}
        min={priceRange.min || 0}
        max={priceRange.max || 100}
      />
      <TagFilter title="Product tags" items={tags} active={activeTag} onChange={setActiveTag} />
    </StyledContainer>
  );
};

export default memo(FilterPanel);
