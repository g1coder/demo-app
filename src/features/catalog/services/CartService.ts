import api from 'core/services/ApiService';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import IProductRaw from 'features/catalog/models/IProductRaw';

export default {
  getCart,
  getCartDetails,
  updateCart,
  submitOrder,
};

function getCart(): Promise<{products: Record<string, number>; totalCount: number; totalPrice: number}> {
  return api
    .get<{pairs: Record<string, number>; total_count: number; total_price: number}>(`/api/catalog/cart`)
    .then((response) => ({
      products: response.pairs,
      totalCount: response.total_count,
      totalPrice: response.total_price,
    }));
}

function getCartDetails(): Promise<Array<{product: IBaseProduct; count: number}>> {
  return api.get<Array<{product: IProductRaw; count: number}>>(`/api/catalog/cart-details`);
}

function updateCart(productId: IBaseProduct['id'], mode: 'increment' | 'decrement') {
  if (mode === 'increment') {
    return api.post<{count: number; total_price: number}>('/api/catalog/cart/add', {productId});
  }
  return api.post<{count: number; total_price: number}>('/api/catalog/cart/remove', {productId});
}

function submitOrder(): Promise<void> {
  return api.post('/api/catalog/cart/submit');
}
