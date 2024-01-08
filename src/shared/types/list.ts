export interface IParams {
  limit?: number;
  offset?: number;
}

export interface IParamsWithQuery extends IParams {
  q?: string;
}

export interface IParamsWithOrder extends IParams {
  order?: string;
}

export interface IMeta {
  limit?: number;
  offset?: number;
  total: number;
}

export class List<T> {
  #total = 0;
  items: T[] = [];
  #meta: IMeta;

  constructor(items: T[], total: number, offset?: number, limit?: number) {
    this.items = items;
    this.#total = total;
    this.#meta = {
      limit,
      offset,
      total,
    };
  }

  get total(): number {
    return this.#total;
  }

  get meta(): IMeta {
    return this.#meta;
  }
}
