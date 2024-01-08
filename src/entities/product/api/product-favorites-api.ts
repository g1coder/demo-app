import {useQuery, UseQueryOptions} from '@tanstack/react-query';
import {ErrorModel, List} from '@shared/types';
import {API} from '@shared/services';
import {IBaseProduct} from '@entities/product';

const QUERY_KEY = 'product-favorites';

type TOptions = Omit<UseQueryOptions<List<string>, ErrorModel>, 'queryKey' | 'queryFn'>;

export const useProductFavorites = (options?: TOptions) =>
  useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => API.get<List<string>>('/api/v1/products/favorites'),
    ...options,
  });
