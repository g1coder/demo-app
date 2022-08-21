import React, {memo, useCallback} from 'react';
import withBaseFilter from 'features/shop/HOC/withBaseFilter';
import {Typography} from '@mui/material';

export interface IProps {
  items: string[];
  onChange: (value: string) => void;
  active?: string;
}

const TagFilter = ({items, onChange, active}: IProps) => {
  const handleOnClick = useCallback(
    (value: string) => {
      onChange(value);
    },
    [onChange]
  );

  return (
    <>
      {items.map((tag, index) => (
        <Typography
          key={tag}
          variant="body1"
          color={active === tag ? 'primary.light' : 'primary.dark'}
          fontWeight={900}
          component="span"
          onClick={() => handleOnClick(tag)}
          sx={{cursor: 'pointer'}}
        >
          {`#${tag}${index < items.length - 1 ? ', ' : ''}`}
        </Typography>
      ))}
    </>
  );
};

export default memo(withBaseFilter(TagFilter)<IProps>);
