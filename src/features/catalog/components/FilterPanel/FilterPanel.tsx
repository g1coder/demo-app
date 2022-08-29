import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter, {IProps as IPriceFilterProps} from 'features/catalog/components/FilterPanel/PriceFilter';
import TagFilter, {IProps as ITagFilterProps} from 'features/catalog/components/FilterPanel/TagFilter';
import IProductParams from 'features/catalog/models/IProductParams';
import {useSearchParams} from 'react-router-dom';
import querySerializer from 'core/services/QuerySerializer';
import _ from 'lodash';
import {Chip, Grid} from '@mui/material';

const StyledContainer = styled('div')(({theme: {spacing}}) => ({
  maxWidth: 360,
  position: 'sticky',
  top: spacing(2),
}));

const StyledFilterChip = styled(Chip)(() => ({
  marginRight: 8,
}));

interface IProps {
  initialValues: Pick<IPriceFilterProps, 'min' | 'max'> & Pick<ITagFilterProps, 'tags'>;
  onChange: (params: IProductParams) => void;
}

const FilterPanel = ({initialValues, onChange}: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<IProductParams>({});

  useEffect(() => {
    const tag = searchParams.get('tag');
    const min = searchParams.get('min');
    const max = searchParams.get('max');

    const params: IProductParams = _.pickBy(
      {
        tag: tag || undefined,
        min: min ? +min : undefined,
        max: max ? +max : undefined,
      },
      (o) => !_.isNil(o)
    );

    setFilters(params);
    onChange(params);
  }, [searchParams, onChange]);

  const applyFilters = useCallback(
    (value: Partial<IProductParams>) => {
      setSearchParams(querySerializer({...filters, ...value}));
    },
    [filters, setSearchParams]
  );

  const handleResetFilter = useCallback(
    (property: keyof IProductParams) => {
      const param = searchParams.get(property);
      if (param) {
        searchParams.delete(property);
        setSearchParams(searchParams);
      }
    },
    [searchParams, setSearchParams]
  );

  const renderFilterChips = useMemo(() => {
    if (_.isEmpty(filters)) return null;

    return _.keys(filters).map((key) => (
      <StyledFilterChip
        key={key}
        label={`${key}: ${filters[key]}`}
        onDelete={() => handleResetFilter(key as keyof IProductParams)}
        color="primary"
      />
    ));
  }, [filters, handleResetFilter]);

  return (
    <StyledContainer>
      <PriceFilter
        title="Price"
        initialValues={[initialValues.min, initialValues.max]}
        onChange={applyFilters}
        min={initialValues.min}
        max={initialValues.max}
      />
      <TagFilter title="Product tags" tags={initialValues.tags} initialValues={filters.tag} onChange={applyFilters} />
      <Grid container spacing={2}>
        <Grid item justifyContent="flex-start">
          {renderFilterChips}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default memo(FilterPanel);
