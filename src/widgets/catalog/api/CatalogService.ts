import {IBaseProduct} from '@entities/catalog';
import api from '@shared/api/services/ApiService';
import List from '@shared/models/List';
import IProductRaw from '../model/IProductRaw';
import IProductParams from '../model/IProductParams';

export function getList(params: IProductParams | undefined): Promise<List<IBaseProduct>> {
    return api.get<List<IProductRaw>>('/api/v1/catalog/products', {params});
}

export function getOptions(): Promise<{min: number; max: number; tags: string[]}> {
    return api.get(`/api/v1/catalog/products/filters`);
}

export function getFavoriteIds(): Promise<string[]> {
    return api.get(`/api/v1/catalog/products/favorites`);
}

export function toggleFavorites(id: string, mode: 'add' | 'remove'): Promise<string[]> {
    return api.post(`/api/v1/catalog/products/favorites/${mode}`, {id});
}
