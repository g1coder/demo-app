import IList from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/catalog/models/IProductRaw';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import IProductParams from 'features/catalog/models/IProductParams';

export default {
  getList,
  getOptions,
  getFavoriteIds,
  toggleFavorites,
};

function getList(params: IProductParams | undefined): Promise<IList<IBaseProduct>> {
  return api.get<IList<IProductRaw>>('/api/catalog/products', {params});
}

function getOptions(): Promise<{min: number; max: number; tags: string[]}> {
  return api.get(`/api/catalog/products/filters`);
}

function getFavoriteIds(): Promise<string[]> {
  return api.get(`/api/catalog/products/favorites`);
}

function toggleFavorites(id: string, mode: 'add' | 'remove'): Promise<string[]> {
  return api.post(`/api/catalog/products/favorites/${mode}`, {id});
}
