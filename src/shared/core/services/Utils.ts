import INamedEntity from 'shared/model/INamedEntity';
import {queryParse} from "shared/core/services/QuerySerializer";
import {Location} from "react-router-dom";

export default {
  joinNames,
  nameOf,
  getNextUrlString,
  getNextFromUrl
};

function joinNames<T extends string | number>(namedArray: INamedEntity<T>[]) {
  return (namedArray || []).map((e) => e.name).join(', ');
}

function nameOf<T>(name: keyof T) {
  return name;
}

function getNextUrlString(location: Location, paramName: string = 'next'): string {
  return `?${paramName}=${encodeURIComponent(location.pathname + location.search)}`;
}

function getNextFromUrl(search: string, paramName: string = 'next'): string | null {
  const next = queryParse(search)[paramName];
  return (next && decodeURIComponent(next as string)) || null;
}