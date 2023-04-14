import {pickBy, isNil} from 'lodash';
import {memo, useCallback, useEffect, useState} from 'react';
import {useSearchParams} from 'react-router-dom';
import {styled} from '@mui/material/styles';
import {Grid} from '@mui/material';

import {PriceFilter, TagFilter} from '@features/catalog';
import querySerializer from '@shared/api/services/QuerySerializer';
import useData from '@shared/lib/hooks/useData';
import IProductParams from '../../model/IProductParams';
import {getOptions} from '../../api/CatalogService';
import {FilterChips} from '@entities/catalog';

const StyledContainer = styled('aside')(({theme: {spacing}}) => ({
  maxWidth: 360,
  position: 'sticky',
  top: spacing(2),
}));

interface IProps {
  onChange: (params: IProductParams) => void;
}

const FilterPanel = ({onChange}: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<IProductParams>({});

  const [{data: initialFilters, loading}] = useData(
    {
      fetch: () => getOptions(),
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
          <FilterChips<IProductParams> filters={filters} onDelete={handleResetFilter} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};

export default memo(FilterPanel);
