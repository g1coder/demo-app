import _ from 'lodash';
import React, {memo, useCallback, useEffect, useMemo, useState} from 'react';
import withBaseFilter from 'features/catalog/HOC/withBaseFilter';
import {Typography} from '@mui/material';

export interface IProps {
  initialValues: string | undefined;
  tags: string[] | undefined;
  onChange: (value: {tag: string}) => void;
}

const TagFilter = ({initialValues, tags = [], onChange}: IProps) => {
  const [active, setActive] = useState<string | undefined>(initialValues);
  const debouncedApplyParams = useMemo(() => _.debounce(onChange, 1000), [onChange]);

  useEffect(() => {}, []);

  const handleOnClick = useCallback(
    (tag: string) => {
      setActive(tag);
      debouncedApplyParams({tag});
    },
    [debouncedApplyParams]
  );

  return (
    <>
      {tags.map((tag, index) => (
        <Typography
          key={tag}
          variant="body1"
          color={active === tag ? 'primary.light' : 'primary.dark'}
          fontWeight={900}
          component="span"
          onClick={() => handleOnClick(tag)}
          sx={{cursor: 'pointer'}}
        >
          {`#${tag}${index < tags.length - 1 ? ', ' : ''}`}
        </Typography>
      ))}
    </>
  );
};

export default memo(withBaseFilter(TagFilter)<IProps>);
