import IList from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/catalog/models/IProductRaw';
import IBaseProduct from 'features/catalog/models/IBaseProduct';
import IProductDetailsRaw from 'features/catalog/models/IProductDetailsRaw';
import IProductParams from 'features/catalog/models/IProductParams';

export default {
  getList,
  getById,
};

function getList(params: IProductParams | undefined): Promise<IList<IBaseProduct>> {
  return api.get<IList<IProductRaw>>('/api/catalog/products', {params}).then((response) => {
    const result: any = response.map((r) => r);
    result.$meta = response.$meta;
    return result;
  });
}

function getById(id: IBaseProduct['id']): Promise<IBaseProduct> {
  return api.get<IProductDetailsRaw>(`/api/catalog/products/${id}`);
}
