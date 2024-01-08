import {useCallback, useEffect, useState} from 'react';
import {pickBy, isNil} from 'lodash';
import {useSearchParams} from 'react-router-dom';
import {Grid} from '@mui/material';
import {styled} from '@mui/material/styles';
import {PriceFilter, TagFilter, AppliedFilters} from '@shared/ui-kit';
import {QuerySerializer} from '@shared/services';
import IProductParams from '@widgets/catalog/types/IProductParams';

const StyledContainer = styled('aside')(({theme: {spacing}}) => ({
  maxWidth: 360,
  position: 'sticky',
  top: spacing(2),
}));

interface IProps {
  onChange: (params: IProductParams) => void;
}

export const ProductFilters = ({onChange}: IProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [filters, setFilters] = useState<IProductParams>({});

  const initialFilters = {
    tags: [],
    min: 0,
    max: 50,
  };

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
      setSearchParams(QuerySerializer({...filters, ...value}));
    },
    [filters, setSearchParams]
  );

  const handleResetFilter = useCallback(
    (property: string) => {
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
        loading={false}
        title="Price"
        value={{min: filters.min, max: filters.max}}
        onChange={applyFilters}
        minLimit={initialFilters.min}
        maxLimit={initialFilters.max}
      />
      <TagFilter
        loading={false}
        title="Product tags"
        value={filters.tag}
        onChange={applyFilters}
        tags={initialFilters.tags}
      />
      <Grid container spacing={2}>
        <Grid item justifyContent="flex-start">
          <AppliedFilters<IProductParams> filters={filters} onDelete={handleResetFilter} />
        </Grid>
      </Grid>
    </StyledContainer>
  );
};
