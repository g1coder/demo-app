import _ from 'lodash';
import React, {memo, useCallback, useMemo, useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter, {IProps as IPriceFilterProps} from 'features/catalog/components/FilterPanel/PriceFilter';
import TagFilter, {IProps as ITagFilterProps} from 'features/catalog/components/FilterPanel/TagFilter';
import IProductParams from 'features/catalog/models/IProductParams';

const StyledContainer = styled('div')(() => ({
  height: 800,
  width: 360,
}));

interface IProps {
  onChange: (value: IProductParams) => void;
  initialValues: Pick<IPriceFilterProps, 'min' | 'max'> & Pick<ITagFilterProps, 'tags'>;
}

const FilterPanel = ({initialValues, onChange}: IProps) => {
  // const [price, setPrice] = useState<number[]>([initialValues.min || 0, initialValues.max || 50]);
  // const [activeTag, setActiveTag] = useState<string | undefined>();

  const [filters, setFilters] = useState<IProductParams>({
    price: initialValues,
    tag: undefined,
  });

  const applyFilters = useCallback(
    (property: keyof IProductParams, value: IProductParams[keyof IProductParams]) => {
      // onChange({min: price.length ? price[0] : undefined, max: price.length ? price[1] : undefined, tag});
      setFilters((currentValue) => {
        const result = {...currentValue, [property]: value};
        onChange(result);
        return result;
      });
    },
    [onChange]
  );

  const debouncedApplyParams = useMemo(() => _.debounce(applyFilters, 1000), [applyFilters]);

  const handlePriceChanged = useCallback(
    (price: Pick<IPriceFilterProps, 'min' | 'max'>) => {
      debouncedApplyParams('price', price);
    },
    [debouncedApplyParams]
  );

  const handleTagChanged = useCallback(
    (tag: string) => {
      debouncedApplyParams('tag', tag);
    },
    [debouncedApplyParams]
  );

  return (
    <StyledContainer>
      <PriceFilter
        title="Price"
        value={[filters?.price?.min || 0, filters?.price?.max || 50]}
        onChange={handlePriceChanged}
        min={initialValues.min}
        max={initialValues.max}
      />
      <TagFilter title="Product tags" tags={initialValues.tags} active={filters.tag} onChange={handleTagChanged} />
    </StyledContainer>
  );
};

export default memo(FilterPanel);
