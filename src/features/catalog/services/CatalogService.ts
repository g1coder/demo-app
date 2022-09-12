import IList from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/catalog/models/IProductRaw';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import IProductParams from 'features/catalog/models/IProductParams';
import {IProps as IPriceFilterProps} from 'features/catalog/components/FilterPanel/PriceFilter';
import {IProps as ITagFilterProps} from 'features/catalog/components/FilterPanel/TagFilter';

export default {
  getList,
  getOptions,
  getCart,
  getCartDetails,
  updateCart,
  submitOrder,
};

function getList(params: IProductParams | undefined): Promise<IList<IBaseProduct>> {
  return api.get<IList<IProductRaw>>('/api/catalog/products', {params}).then((response) => {
    const result: any = response.map((r) => r);
    result.$meta = response.$meta;
    return result;
  });
}

function getOptions(): Promise<Pick<IPriceFilterProps, 'min' | 'max'> & Pick<ITagFilterProps, 'tags'>> {
  return api.get(`/api/catalog/products/filters`);
}

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
    return api.post<{count: number}>('/api/catalog/cart/add', {productId});
  }
  return api.post<{count: number}>('/api/catalog/cart/remove', {productId});
}

function submitOrder(): Promise<void> {
  return api.post('/api/catalog/cart/submit');
}
