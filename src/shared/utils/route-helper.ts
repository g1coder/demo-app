import {Location} from 'react-router-dom';
import {queryParse} from '@shared/services/query-serializer';

export const getNextUrlString = (location: Location, paramName = 'next'): string => {
  return `?${paramName}=${encodeURIComponent(location.pathname + location.search)}`;
};

export const getNextFromUrl = (search: string, paramName = 'next'): string | null => {
  const next = queryParse(search)[paramName];
  return (next && decodeURIComponent(next as string)) || null;
};
