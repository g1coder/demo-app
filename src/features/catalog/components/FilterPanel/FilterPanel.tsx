import {pickBy, isNil, isEmpty, keys} from 'lodash';
import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {styled} from '@mui/material/styles';
import PriceFilter from 'features/catalog/components/FilterPanel/PriceFilter';
import TagFilter from 'features/catalog/components/FilterPanel/TagFilter';
import IProductParams from 'features/catalog/models/IProductParams';
import {useSearchParams} from 'react-router-dom';
import querySerializer from 'shared/core/services/QuerySerializer';
import {Chip, Grid} from '@mui/material';
import useData from 'shared/lib/hooks/useData';
import CatalogService from 'features/catalog/services/CatalogService';

const StyledContainer = styled('aside')(({theme: {spacing}}) => ({
  maxWidth: 360,
  position: 'sticky',
  top: spacing(2),
}));

const StyledFilterChip = styled(Chip)({
  marginRight: 4,
});

interface IProps {
  onChange: (params: IProductParams) => void;
}

const FilterPanel = ({onChange}: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<IProductParams>({});

  const [{data: initialFilters, loading}] = useData(
    {
      fetch: () => CatalogService.getOptions(),
      data: {
        tags: [],
        min: 0,
        max: 50,
      },
    },
    []
  );

  useEffect(() => {
    const tag = searchParams.get('tag');
    const min = searchParams.get('min');
    const max = searchParams.get('max');

    const params: IProductParams = pickBy(
      {
        tag: tag || undefined,
        min: min ? +min : undefined,
        max: max ? +max : undefined,
      },
      (o) => !isNil(o)
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
    if (isEmpty(filters)) return null;

    return keys(filters).map((key) => (
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
        loading={loading}
        title="Price"
        value={{min: filters.min, max: filters.max}}
        onChange={applyFilters}
        minLimit={initialFilters.min}
        maxLimit={initialFilters.max}
      />
      <TagFilter
        loading={loading}
        title="Product tags"
        value={filters.tag}
        onChange={applyFilters}
        tags={initialFilters.tags}
      />
      <Grid container spacing={2}>
        <Grid item justifyContent="flex-start">
          {renderFilterChips}
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default memo(FilterPanel);
