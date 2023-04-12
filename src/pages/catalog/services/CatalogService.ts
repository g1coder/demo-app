import api from 'shared/core/services/ApiService';
import List from 'shared/core/models/List';
import IProductRaw from 'shared/model/IProductRaw';
import IBaseProduct from 'shared/model/IBaseProduct';
import IProductParams from 'pages/catalog/models/IProductParams';

export default {
  getList,
  getOptions,
  getFavoriteIds,
  toggleFavorites,
};

function getList(params: IProductParams | undefined): Promise<List<IBaseProduct>> {
  return api.get<List<IProductRaw>>('/api/v1/catalog/products', {params});
}

function getOptions(): Promise<{min: number; max: number; tags: string[]}> {
  return api.get(`/api/v1/catalog/products/filters`);
}

function getFavoriteIds(): Promise<string[]> {
  return api.get(`/api/v1/catalog/products/favorites`);
}

function toggleFavorites(id: string, mode: 'add' | 'remove'): Promise<string[]> {
  return api.post(`/api/v1/catalog/products/favorites/${mode}`, {id});
}