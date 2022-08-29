import IList from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/catalog/models/IProductRaw';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import IProductParams from 'features/catalog/models/IProductParams';

export default {
  getList,
  getCart,
  updateCart,
};

function getList(params: IProductParams | undefined): Promise<IList<IBaseProduct>> {
  return api.get<IList<IProductRaw>>('/api/catalog/products', {params}).then((response) => {
    const result: any = response.map((r) => r);
    result.$meta = response.$meta;
    return result;
  });
}

function getCart(): Promise<Record<string, number>> {
  return api.get(`/api/catalog/cart`);
}

function updateCart(productId: IBaseProduct['id'], mode: 'increment' | 'decrement') {
  if (mode === 'increment') {
    return api.post<{count: number}>('/api/catalog/cart/add', {productId});
  }
  return api.post<{count: number}>('/api/catalog/cart/remove', {productId});
}
