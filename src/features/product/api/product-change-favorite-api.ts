import {useMutation} from '@tanstack/react-query';
import {API} from '@shared/services';
import {IBaseProduct} from '@entities/product';

export const useProductChangeFavorite = (productId: IBaseProduct['id']) =>
  useMutation({
    mutationKey: [],
    mutationFn: (mode: 'add' | 'remove') => API.post(`/api/v1/catalog/products/favorites/${mode}`, {productId}),
  });
