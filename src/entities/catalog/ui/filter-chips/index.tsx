import {isEmpty, keys} from 'lodash';
import {Chip} from '@mui/material';

interface IProps<T> {
  filters: T;
  onDelete: (key: keyof T) => void;
}

const FilterChips = <T extends Record<string, any>>({filters, onDelete}: IProps<T>) => {
  if (isEmpty(filters)) return null;

  return (
    <>
      {keys(filters).map((key) => (
        <Chip sx={{mr: 4}} key={key} label={`${key}: ${filters[key]}`} onDelete={() => onDelete(key)} color="primary" />
      ))}
    </>
  );
};

export default FilterChips;
