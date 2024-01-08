import {useCallback, useState} from 'react';

const getSearchParam = (search: string, param: string) => {
  const searchParams = new URLSearchParams(search);
  return searchParams.get(param);
};

const setSearchParam = (search: string, param: string, value: string) => {
  const searchParams = new URLSearchParams(search);
  searchParams.set(param, value);
  return searchParams.toString();
};

const defaultSerialize = String;
// @ts-ignore
const defaultDeserialize = <T>(v: string | null) => v as T;

interface IUseSearchParamsStateOptions<T> {
  name: string;
  serialize?: (value: T) => string;
  deserialise?: (value: string | null) => T;
}

export const useSearchParamsState = <T>({
  name,
  serialize = defaultSerialize,
  deserialise = defaultDeserialize,
}: IUseSearchParamsStateOptions<T>) => {
  const [value, setValue] = useState(() => {
    return deserialise(getSearchParam(location.search, name));
  });

  const updateValue = useCallback((newValue) => {
    const search = window.location.search;
    const actualNewValue = typeof newValue === 'function' ? newValue(value) : newValue;
    setValue(actualNewValue);
    const newSearch = setSearchParam(search, name, serialize(actualNewValue));
    history.pushState(null, '', `?${newSearch}`);
  }, []);

  return [value, updateValue] as const;
};
