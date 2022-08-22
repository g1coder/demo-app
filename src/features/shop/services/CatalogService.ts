import IList from 'core/models/IList';
import api from 'core/services/ApiService';
import IProductRaw from 'features/shop/models/IProductRaw';
import IBaseProduct from 'features/shop/models/IBaseProduct';
import IProductDetailsRaw from 'features/shop/models/IProductDetailsRaw';
import IProductParams from 'features/shop/models/IProductParams';

export default {
  getList,
  getById,
};

function getList(params: IProductParams | undefined): Promise<IList<IBaseProduct>> {
  return api
    .get<IList<IProductRaw>>('/api/shop/products', {
      params: {tag: params?.tag, min: params?.price?.min, max: params?.price?.max},
    })
    .then((response) => {
      const result: any = response.map((r) => r);
      result.$meta = response.$meta;
      return result;
    });
}

function getById(id: IBaseProduct['id']): Promise<IBaseProduct> {
  return api.get<IProductDetailsRaw>(`/api/shop/products/${id}`);
}
