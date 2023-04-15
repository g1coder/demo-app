import {Location} from "react-router-dom";
import {queryParse} from '../api/services/QuerySerializer';

export default {
  getNextUrlString,
  getNextFromUrl
};

function getNextUrlString(location: Location, paramName = 'next'): string {
  return `?${paramName}=${encodeURIComponent(location.pathname + location.search)}`;
}

function getNextFromUrl(search: string, paramName = 'next'): string | null {
  const next = queryParse(search)[paramName];
  return (next && decodeURIComponent(next as string)) || null;
}
