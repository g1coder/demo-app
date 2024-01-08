import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {ErrorModel, List} from '@shared/types';
import {API} from '@shared/services';
import {IBaseProduct} from '@entities/product';

const QUERY_KEY = 'product-list';

type TOptions = Omit<UseQueryOptions<List<IBaseProduct>, ErrorModel>, 'queryKey' | 'queryFn'>;

export interface IProductListParams {
  min?: number;
  max?: number;
  tag?: string;
}

export const useProductList = (params?: IProductListParams, options?: TOptions) =>
  useQuery({
    queryKey: [QUERY_KEY, params],
    queryFn: () => API.get<List<IBaseProduct>>('/api/v1/products', {params}),
    ...options,
  });
