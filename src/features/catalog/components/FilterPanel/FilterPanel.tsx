import React, {memo, useCallback, useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter, {IProps as IPriceFilterProps} from 'features/catalog/components/FilterPanel/PriceFilter';
import TagFilter, {IProps as ITagFilterProps} from 'features/catalog/components/FilterPanel/TagFilter';
import IProductParams from 'features/catalog/models/IProductParams';
import {useSearchParams} from 'react-router-dom';
import querySerializer from 'core/services/QuerySerializer';

const StyledContainer = styled('div')(() => ({
  maxWidth: 360,
}));

interface IProps {
  initialValues: Pick<IPriceFilterProps, 'min' | 'max'> & Pick<ITagFilterProps, 'tags'>;
}

const FilterPanel = ({initialValues}: IProps) => {
  const [, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<IProductParams>({});

  const applyFilters = useCallback(
    (value: Partial<IProductParams>) => {
      setSearchParams(querySerializer({...filters, ...value}));
    },
    [filters, setSearchParams]
  );

  const handlePriceChanged = useCallback(
    ({min, max}: Pick<IPriceFilterProps, 'min' | 'max'>) => {
      setFilters((currentValue) => ({...currentValue, min, max}));
      applyFilters({min, max});
    },
    [applyFilters]
  );

  const handleTagChanged = useCallback(
    (tag: string) => {
      setFilters((currentValue) => (currentValue.tag !== tag ? {...currentValue, tag} : currentValue));
      applyFilters({tag});
    },
    [applyFilters]
  );

  return (
    <StyledContainer>
      <PriceFilter
        title="Price"
        initialValues={[initialValues.min, initialValues.max]}
        onChange={handlePriceChanged}
        min={initialValues.min}
        max={initialValues.max}
      />
      <TagFilter
        title="Product tags"
        tags={initialValues.tags}
        initialValues={filters.tag}
        onChange={handleTagChanged}
      />
    </StyledContainer>
  );
};

export default memo(FilterPanel);
