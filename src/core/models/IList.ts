export interface IParams {
  limit?: number;
  offset?: number;
}

export interface IParamsWithQuery extends IParams {
  q?: string;
}

export interface IParamsWithOrder extends IParams {
  order_by?: string;
}

export interface IMeta {
  limit: number;
  offset: number;
  total_count: number;
  next?: string;
  previous?: string;
}

export default interface IList<TData, TMeta extends IMeta = IMeta> extends Array<TData> {
  $meta: TMeta;
}
