import qs from 'qs';

export const queryParse = (params: string) => {
  return qs.parse(params, {ignoreQueryPrefix: true});
};

const querySerializer = (params: Record<string, unknown>) => {
  return qs.stringify(params, {indices: false, skipNulls: true, encode: true});
};

export default querySerializer;
