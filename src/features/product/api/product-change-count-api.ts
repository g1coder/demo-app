import {useMutation} from '@tanstack/react-query';
import {API} from '@shared/services';
import {IBaseProduct} from '@entities/product';

export const useProductChangeCount = (productId: IBaseProduct['id']) =>
  useMutation({
    mutationKey: [],
    mutationFn: async (mode: 'increment' | 'decrement') => {
      if (mode === 'increment') {
        return API.post<{count: number; total_price: number}>('/api/v1/cart/add', {productId});
      }
      return API.post<{count: number; total_price: number}>('/api/v1/cart/remove', {productId});
    },
  });
