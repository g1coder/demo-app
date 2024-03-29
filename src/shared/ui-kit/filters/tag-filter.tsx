import {memo, useCallback, useEffect, useMemo, useState} from 'react';
import {Typography} from '@mui/material';
import {debounce} from 'lodash';
import {withBaseFilter} from '@shared/HOC';

interface IProps {
  tags: string[] | undefined;
  onChange: (value: {tag: string}) => void;
  value: string | undefined;
}

const Cmp = ({value, tags = [], onChange}: IProps) => {
  const [active, setActive] = useState<string | undefined>(value);

  useEffect(() => {
    setActive((currentValue) => (currentValue !== value ? value : currentValue));
  }, [value]);

  const debouncedApplyParams = useMemo(() => debounce(onChange, 1000), [onChange]);

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

export const TagFilter = memo(withBaseFilter(Cmp)<IProps>);
