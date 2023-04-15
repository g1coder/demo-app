import {Chip} from '@mui/material';
import {isEmpty, keys} from 'lodash';

interface IProps<T> {
  filters: T;
  onDelete: (key: string) => void;
}

const AppliedFilters = <T extends object>({filters, onDelete}: IProps<T>) => {
  if (isEmpty(filters)) return null;

  return (
    <>
      {keys(filters).map((key) => (
        <Chip sx={{mr: 4}} key={key} label={`${key}: ${filters[key]}`} onDelete={() => onDelete(key)} color="primary" />
      ))}
    </>
  );
};

export default AppliedFilters;
